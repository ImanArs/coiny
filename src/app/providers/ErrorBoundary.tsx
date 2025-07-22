"use client";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Поймано в ErrorBoundary:", error, info);
  }

  private resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private reloadHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ padding: 20, textAlign: "center" }}
          className="max-w-[900px] px-10 mx-auto flex flex-col gap-20 justify-center h-screen"
        >
          <h2 className="text-[40px] font-semibold">Что-то пошло не так.</h2>
          <p className="text-xl">
            {this.state.error?.message} попробуйте перезагрузить страницу или
            перейти на главную страницу
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <button className="rounded-[12px]" onClick={this.resetError}>
              Попробовать снова
            </button>
            <button className="rounded-[12px]" onClick={this.reloadHome}>
              Вернуться на главную
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
