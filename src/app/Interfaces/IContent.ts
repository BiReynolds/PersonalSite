/**
 * A simple interface which can be used to easily construct simple stand-alone "chunks" of content.  Especially useful for blog-post-like pages where
 * content is not very interactive or connected with other site functions.
 */
export interface IContentChunk {
  GetRawHtml(): string;
}

export class Content implements IContentChunk{
  ContentChunks: IContentChunk[] = [];
  LoadContent(): void {
    return;
  }
  GetRawHtml(): string {
    let result = '';
    for (let i = 0; i < this.ContentChunks.length; i++) {
      result += this.GetRawHtmlFromIndex(i);
    }
    return result;
  }
  GetRawHtmlFromIndex(index: number): string {
    return this.ContentChunks[index].GetRawHtml();
  }
}

// Helpful implementations of some common cases
export class RawContentChunk implements IContentChunk {
  Text: string;
  constructor(text: string) {
    this.Text = text;
  }
  GetRawHtml() {
    return this.Text;
  }
}

export class TextContentChunk implements IContentChunk {
  Text: string;
  constructor(text: string) {
    this.Text = text;
  }
  GetRawHtml() {
    return `<p>${this.Text}</p>`
  }
}

// a class for Math content, with a div-wrapper for potential styling
export class MathContentChunk implements IContentChunk {
  MathHtml: string;
  constructor(mathHtml: string) {
    this.MathHtml = mathHtml;
  }
  GetRawHtml() {
    return `<div class='math-div'>${this.MathHtml}</div>`
  }
}
