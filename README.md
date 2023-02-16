# :warning: DEPRECATED :warning:

**I recommend you use [`@angular/cdk/portal`](https://material.angular.io/cdk/portal) and create your own [service](https://github.com/JanMalch/ngx-send-templates/blob/master/projects/ngx-send-templates/src/lib/send-templates.service.ts).**

---

[![npm version](https://badge.fury.io/js/ngx-send-templates.svg)](https://badge.fury.io/js/ngx-send-templates) 

# ngx-send-templates

Small Angular library to easily send templates to different locations. Based on the [Advanced Angular Concepts talk by Alex Rickabaugh](https://youtu.be/rKbY1t39dHU).

## Installation

Install via `npm install ngx-send-templates --save` and import `NgxSendTemplatesModule` in your AppModule.

## Usage

You can now use the directives `*sendTemplate` and `*receiveTemplate` or manually use the `SendTemplatesService`.

### Sending a template

```html
<div *sendTemplate>Send this to the default location</div>
<div *sendTemplate="'leftNav'">Send this div to the left nav!</div>
```

>`ngx-send-templates` uses `'default'` as the key for the default stream. So the following are equal:
>`<div *sendTemplate>`, `<div *sendTemplate="'default'">`, `<div *sendTemplate="undefined">`, `<div *sendTemplate="null">`

### Receive a template

```html
<ng-container *receiveTemplate></ng-container> <!-- uses default stream -->
<p *receiveTemplate="'leftNav'">This is a placeholder while there is no template!</p>
```

> Templates are sent via `BehaviourSubjects` so you will always receive the latest template.

## Manage Timings

## `*sendTemplate`

The `*sendTemplate` directive takes an observable as input with `on`. Every time the observable emits, the template wil be sent.

Furthermore you can apply a `pipe`-operator with the `do` input to change the observable behaviour.

```html
<div *sendTemplate="'leftNav' on button$ do delayBy(5000)">This will be sent 5s after the button was clicked.</div>
<button (click)="button$.next()">Send Template</button>
```

```typescript
button$ = new Subject<void>();

delayBy = (by: number) => (source$) => source$.pipe(
  delay(by)
);
```

## `*receiveTemplate`

The `*receiveTemplate` directive also takes a `pipe`-operator with `do` input, to change the behaviour on the receiving end.

```html
<div *receiveTemplate="'confirm' do confirmTemplate">Placeholder ...</div>
```

```typescript
confirmTemplate = (source$) => source$.pipe(
  filter(val => confirm("Do you really want to show this?"))
)
```

## Examples

Check out the [docs](https://janmalch.github.io/ngx-send-templates/) for use cases and code examples.

* Different template sources
* Timer observables
* Side effects
* Benefit of BehaviourSubjects (e.g. in `*ngIf`)
* Stepper
* After (multiple) Button clicks
* Confirm receiving the template
