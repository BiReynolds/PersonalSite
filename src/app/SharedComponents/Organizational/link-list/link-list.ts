import { Component, model } from '@angular/core';
import { LinkModel } from '../../../Models/LinkModel'

@Component({
  selector: 'app-link-list',
  imports: [],
  templateUrl: './link-list.html',
  styleUrl: './link-list.css',
})
export class LinkList {
  Name = model<string>("");
  Links = model<LinkModel[]>([]);
}
