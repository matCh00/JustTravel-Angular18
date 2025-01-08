# Just Travel - Angular 18

## new Angular structure and best practices

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

### Angular features

* **project features**:
    * animations:
        * <x>angular animations</x>
    * related flow
        * <x>input()</x>
        * <x>output()</x>
        * two-way: <x>model()</x>
    * component flow:
        * <x>signal()</x>
        * <x>viewChild()</x>
        * async: <x>toSignal + Observable<x>
        * destroy: <x>DestroyRef<x>
    * injectable:
        * <x>inject()</x>
    * html flow:
        * <x>@if</x>
        * <x>@for</x>
        * defer: <x>@defer</x>


* **other features**:
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
        * map
        * places-carousel
        * _component_
    * [home](app/src/app/feature/home)
        * hero
        * instruction
        * nav-buttons
        * _component_
    * [travel](app/src/app/feature/travel)
        * map
        * _component, routes_
    * [travels](app/src/app/feature/travels)
        * trip-dialog
        * trip-list
        * _component, routes_


* **[shared](app/src/app/shared)** - _folder with shared elements_
    * components
    * models
        * place.model
        * trip.model
    * services
        * api.service