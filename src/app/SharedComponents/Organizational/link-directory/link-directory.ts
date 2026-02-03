import { Component, model } from '@angular/core';
import { LinkList } from '../link-list/link-list';

import { LinkModel } from '../../../Models/LinkModel';

@Component({
  selector: 'app-link-directory',
  imports: [LinkList],
  templateUrl: './link-directory.html',
  styleUrl: './link-directory.css',
})
export class LinkDirectory {
  SectionNames = model<string[]>([]);
  LinkLists = model<LinkModel[][]>([]);
}
