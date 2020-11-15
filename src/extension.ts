import * as vscode from "vscode";
import { Provider, getIncludedLangues } from "./provider";

export const activate = (context: vscode.ExtensionContext) => {
  console.log('Congratulations, "thai-lorem-ipsum" is now active!');

  getIncludedLangues().forEach((language: string) => {
    let disposable = vscode.languages.registerCompletionItemProvider(
      [
        {
          scheme: "file",
          language,
        },
        {
          scheme: "untitled",
          language,
        },
      ],
      new Provider(),
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0"
    );
    context.subscriptions.push(disposable);
  });
};

export function deactivate() {}
