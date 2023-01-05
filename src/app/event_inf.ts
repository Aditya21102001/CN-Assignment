export interface Event {
  id ?: number;
  name ?: string;
  short_desc ?: string;
  cover_picture ?: string;
  registration_start_time ?: number;
  registration_end_time ?: number;
  event_start_time ?: number;
  event_end_time ?: number;
  card_tags ?: string[];
  currency ?: string;
  end_time ?: number;
  event_category ?: string;
  event_subcategory ?: string;
  fees ?: number;
  has_started ?: boolean;
  highlight_event ?: boolean;
  is_college_specific ?: boolean;
  mobile_cover_picture ?: string;
  orderable_key ?: string;
  registration_status ?: string;
  seats_filled ?: number;
  seats_left ?: number;
  registered_users ?: {
    other_users_count ?: number;
    show_users_count ?: boolean;
    top_users ?: [
      {
        image_url ?: string;
        name ?: string;
      }
    ];
  };
  slug ?: string;
  start_time ?: number;
  user_already_registered ?: string;
  venue ?: string;
}
