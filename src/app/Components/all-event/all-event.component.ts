import { Component, OnInit } from '@angular/core';
import { MyService } from '../../event_page.service';
import { Event } from '../../event_inf';
@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css'],
})
export class AllEventComponent implements OnInit {
  events: Event[] = [];
  tags: string[] = [];
  event_category: string = 'ALL_EVENTS';
  event_sub_category: string = 'Upcoming';
  tagEvents: string[] = [];
  pageCount: number = 1;
  curPage: number = 1;
  offset: number = 0;
  mobileTags: boolean = false;
  tagColor: boolean[] = new Array(22);

  constructor(private eventsService: MyService) {}
  async ngOnInit(): Promise<any> {
    (
      await this.eventsService.getEvents(
        this.event_category,
        this.event_sub_category,
        this.tagEvents,
        this.offset
      )
    ).subscribe((resp: any) => {
      this.events = resp.data.events;
      this.pageCount = resp.data.page_count;
    });
    (await this.eventsService.getTags()).subscribe((resp: any) => {
      this.tags = resp.data.tags;
    });
  }
  async apiCall() {
    (
      await this.eventsService.getEvents(
        this.event_category,
        this.event_sub_category,
        this.tagEvents,
        this.offset
      )
    ).subscribe((resp: any) => {
      this.events = resp.data.events;
      this.pageCount = resp.data.page_count;
    });
  }

  getEventCategory(event_category: string) {
    this.event_category = event_category;
    this.event_sub_category = 'Upcoming';
    this.tagEvents = [];
    this.tagColor = [];
    this.apiCall();
  }
  getEventSubCategory(event_sub_category: string) {
    this.event_sub_category = event_sub_category;
    this.apiCall();
  }
  pushTag(tag: string) {
    if (this.tagEvents.indexOf(tag) != -1) {
      this.tagEvents = this.tagEvents.filter((e) => e !== tag);
    } else {
      this.tagEvents.push(tag);
    }
    this.apiCall();
  }
  clearTag(temp: boolean) {
    this.tagEvents = [];
    this.apiCall();
  }

  showPrevPage() {
    this.curPage--;
    this.offset -= 20;
    this.apiCall();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  showNextPage() {
    this.curPage++;
    this.offset += 20;
    this.apiCall();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
