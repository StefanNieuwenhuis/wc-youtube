# Embedded YouTube 📹 Player Web Component
A Web Component that allows you to embed a YouTube player in your application.

By [Stefan Nieuwenhuis](https://twitter.com/stefannhs)

![npm (tag)](https://img.shields.io/npm/v/wc-youtube/latest)
![npm](https://img.shields.io/npm/dw/wc-youtube)

## Installation
```bash
# via npm
npm i wc-youtube

# or yarn
yarn add wc-youtube
```

## Usage
```html
<script type="module">
  import 'wc-youtube/wc-youtube.js';
</script>

<wc-youtube></wc-youtube>
```

## Demo 
<custom-element-demo>
  <template>
    <wc-youtube videoId="M7lc1UVf-VE"></wc-youtube>
  </template>
</custom-element-demo>

## Attributes
| Attribute | Type | Default value | Description | Possible values |
|-----------|------|---------------|-------------|-----------------|
| `autoplay` | number | 0 | Specifies if a video automatically stats playing when the player loads | 0, 1 |
| `cc_lang_pref` | string | en | Specifies the default language for captions ([ISO 639-1 format](http://www.loc.gov/standards/iso639-2/php/code_list.php)) | Any ISO 639-1 two-letter language code |
| `cc_load_policy` | number | null | Specifies if closed captions are shown by default | 0, 1 |
| `color` | string | null | Specifies the color of the video's progress bar | red, white |
| `controls` | number | 1 | Specifies if the video controls are displayed | 0, 1 |
| `disablekb` | number | 0 | Specifies if the player responds to keyboard controls | 0, 1 |
| `enablejsapi` | number | 0 | Specifies if the player responds to IFrame of JavaScript api calls | 0, 1 |
| `end` | number | null | Specifies the time, measured in seconds from the start of the video, when the player should stop playing the video | any positive integer |
| `fs` | number | 1 | Specifies if the fullscreen button is displayed | 0, 1 |
| `height` | number | 500 | Specifies the height of the player | any positive integer |
| `hl` | string | en | Specifies the interface language ([ISO 639-1 format](http://www.loc.gov/standards/iso639-2/php/code_list.php) | Any ISO 639-1 two-letter language code |
| `iv_load_policy` | number | 1 | Specifies if video annotations are shown | 1, 2, 3 |
| `list` | string | null | Specifies the content that will load in the player | searchquery, username or playlistID | 
| `listType` | string | null | Specifies the content that will load in the player | search, user_uploads, playlist |
| `loop` | number | 0 | Specifies if the (list of) video(s) needs to be looped | 0, 1 |
| `modestbranding` | number | null | Specifies if the YouTube logo is displayed. Disabled when `color` is set to white. | 0, 1 |
| `origin` | string | `window.location.origin` | Specifies the domain as the origin parameter value | origin's domain name |
| `playlist` | string | [] | Specifies a comma seperated list of videoId's to play. Video's in the list property will play after | any comma seperated list of valid videoId's |
| `playsinline` | number | 0 | Specifies if videos play inline or fullscreen in an HTML5 player on iOS | 0, 1 |
| `start` | string | null | Specifies the time, measured in seconds from the start of the video, when the player should start playing the video | any positive integer |
| `width` | number | 500 | Specifies the width of the player | any positive integer |
| `widget_referrer` | string | `window.location.href` | Specifies the URL where the player is embedded | the url of the page |
