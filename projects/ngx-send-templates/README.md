[![npm version](https://badge.fury.io/js/ngx-send-templates.svg)](https://badge.fury.io/js/ngx-send-templates) 

# ngx-send-templates

Small Angular library to easily send templates to different locations.

## Installation

Install via `npm install ngx-send-templates --save` and import `NgxSendTemplatesModule` in your AppModule.

## Usage

You can now use the directives `*sendTemplate` and `*receiveTemplate` or manually use the `SendTemplatesService`.

### Sending a template

```html
<div *sendTemplate>Send this to the default location</div>
<div *sendTemplate="'leftNav'">Send this div to the left nav!</div>
```

### Receive a template

```html
<ng-container *receiveTemplate></ng-container> <!-- uses default stream -->
<p *receiveTemplate="'leftNav'">This is a placeholder while there is no template!</p>
```

> Templates are sent via `BehaviourSubjects` so you will always receive the latest template.

## Manage Timings

## `*sendTemplate`

The `*sendTemplate` directive takes an observable as input with `sendOn`. Every time the observable emits, the template wil be sent.

Furthermore you can apply a `pipe` to change the observable behaviour.

```html
<div *sendTemplate="'leftNav'; sendOn: button$; pipe: delayBy(5000)">This will be sent 5s after the button was clicked.</div>
<button (click)="button$.next()">Send Template</button>
```

```typescript
button$ = new Subject<void>();

delayBy = (by: number) => (source$) => source$.pipe(
  delay(by)
);
```

## `*receiveTemplate`

The `*receiveTemplate` directive also takes a `pipe` input, to change the behaviour on the receiving end.

```html
<div *receiveTemplate="'confirm'; pipe: confirmTemplate">Placeholder ...</div>
```

```typescript
confirmTemplate = (source$) => source$.pipe(
  map(val => confirm("Do you really want to show this?") ? val : undefined)
)
```

## Examples

Check out the [docs](https://janmalch.github.io/ngx-send-templates/) for use cases and code examples.
