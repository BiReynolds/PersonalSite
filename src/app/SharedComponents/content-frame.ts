import { Component, input, OnInit } from '@angular/core';

import { Content } from '../Interfaces/IContent';

@Component({
  selector: 'app-content-frame',
  template: `
              @for (chunk of ContentData().ContentChunks; track chunk.GetRawHtml()) {
                <div [innerHTML]=chunk.GetRawHtml()></div>
              } @empty {
                <p>Failed to load content</p>
              }
            `,
  styles: `:host{ display: flex; flex-direction: column; align-items: center; }`
})
export class ContentFrame implements OnInit {
  ContentData = input.required<Content>();
  ngOnInit() {
    this.ContentData().LoadContent();
  }
}
