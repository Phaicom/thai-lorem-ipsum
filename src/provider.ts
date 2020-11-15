import * as vscode from "vscode";
import { genSentence } from "./generator";
const reLorem = /^thlo(\d*)$/i;

export class Provider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext
  ) {
    const line = document.getText(document.getWordRangeAtPosition(position));
    const m = line.match(reLorem);
    const wordCount = (m && +m[1]) || 30;
    const label = (m && m[0]) || "thlo";
    const completionItem = new vscode.CompletionItem(
      label,
      vscode.CompletionItemKind.Property
    );
    completionItem.insertText = new vscode.SnippetString(
      genSentence(wordCount)
    );
    completionItem.detail = `Generating ${wordCount} Dummy Words Thai Paragraph`;
    const items = [completionItem];
    return new vscode.CompletionList(items, true);
  }
}

export const getIncludedLangues = () => {
  const defaultLanguages = ["html"];
  let includeLanguagesConfig =
    vscode.workspace.getConfiguration("thlo")["includeLanguages"] || "";
  return [
    ...defaultLanguages,
    ...includeLanguagesConfig
      .split(",")
      .filter((x: string) => x.length > 0)
      .map((x: string) => x.trim()),
  ];
};
