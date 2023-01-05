import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyService } from '../../event_page.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Output() sendTag = new EventEmitter<string>();
  @Input() tagColor: boolean[] = new Array(22);
  tags: string[] = [];
  showTag: string[] = [];

  constructor(private eventsService: MyService) {}
  async ngOnInit(): Promise<any> {
    (await this.eventsService.getTags()).subscribe((resp: any) => {
      this.tags = resp.data.tags;
      this.showTag = this.tags.slice(0, 10);
      // console.log(this.tags);
    });
  }
  showTags() {
    this.showTag = this.tags;
  }
  showLessTags() {
    this.showTag = this.tags.slice(0, 10);
  }

  emitTag(tag: string) {
    let index = this.tags.indexOf(tag);
    this.tagColor[index] = !this.tagColor[index];
    this.sendTag.emit(tag);
  }
}
