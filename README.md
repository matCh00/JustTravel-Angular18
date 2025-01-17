# Just Travel - Angular 18

## new Angular structure and best practices

### Main View
![main view](app/public/main-view.PNG)

### Preview
![preview](app/public/preview.gif)

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

### Angular features

* **features**:
    * general:
        * state: <x>BehaviorSubject</x> - <x>asObservable()</x> - <x>toSignal</x>
        * async: <x> toSignal(Observable) </x>
        * async detection: <x> effect() </x>
        * destroy: <x> DestroyRef </x>
        * defer: <x> @defer </x>
        * dialog: dynamic <x> dialogService.open() </x>
        * routing: <x> routes </x>
        * resolver: <x> ResolveFn </x>
        * route params: <x> input() </x>
        * form: <x> Reactive </x>
        * extract form: <x> ControlContainer </x>
        * ElementRef: <x> viewChild() </x>
    * template flow:
        * <x> @if </x>
        * <x> @for </x>
        * <x> @switch </x>
    * component:
        * <x> signal() </x>
        * <x> input() </x>
        * <x> output() </x>
        * two-way: <x> model() </x>
        * injectable: <x> inject() </x>
    * animations:
        * angular: <x> [@fly] </x>


* **PrimeNg components**:
    * p-toolbar
    * p-drawer
    * p-carousel
    * p-progressSpinner
    * p-table
    * p-button
    * p-datePicker


* **other**:
    * <x>@angular/google-maps</x>
    * <x>dynamic scss variables</x> - _app.component.ts_
    * <x>theme</x> - _app.config.ts, styles.scss_
    * <x>lazy loading</x> - _app.routes.ts_

------------------

### Structure

* **[core](app/src/app/core)** - _folder with layout standalone components_
    * footer
    * header
    * sidebar


* **[feature](app/src/app/feature)** - _folder with feature standalone components_
    * [explore](app/src/app/feature/explore)
        * places-carousel
        * _component_
    * [home](app/src/app/feature/home)
        * hero
        * instruction
        * _component_
    * [travel](app/src/app/feature/travel)
        * trip-details-form
        * _component, routes, resolver_
    * [travels](app/src/app/feature/travels)
        * trip-dialog-form
        * trip-list
        * _component, routes_


* **[shared](app/src/app/shared)** - _folder with shared elements_
    * components
        * google-maps
        * google-maps-game
        * nav-buttons
    * models
        * location.model
        * place.model
        * trip.model
    * services
        * api.service
        * scroll.service
        * trip.service