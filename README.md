# Just Travel - Angular 18

## new Angular structure and best practices

---------------------
<style>
x { color: orange }
g { color: gold }
</style>

<br>

* **[core](app/src/app/core)** - _folder with layout standalone components_
    * footer
    * header
        * <x>output()</x>
        * <x>animation: angular animations</x>
    * sidebar
        * <x>two-way: model()</x>

<br>

* **[feature](app/src/app/feature)** - _folder with feature standalone components_
    * [admin-panel](app/src/app/feature/admin-panel)
        * dashboard
        * users-list
        * _component, routes_
            * <x>lazy</x>
            * <x>defer: @defer</x>
    * [map](app/src/app/feature/map)
        * _component, routes_
            * <x>lazy</x>
    * [review](app/src/app/feature/review)
        * review-form
        * review-list
        * _component, routes_
            * <x>lazy</x>
    * [travel](app/src/app/feature/travel)
        * travel-carousel
        * travel-details
        * travel-list
        * _component, routes_
            * <x>lazy</x>
            * <x>defer: @defer</x>

<br>

* **[shared](app/src/app/shared)** - _folder with shared standalone components_

<br>

* other features:
    * <x>dynamic scss variables</x> - _app.component.ts_
    * <x>theme</x> - _app.config.ts, styles.scss_   
    * <x>lazy loading</x> - _app.routes.ts_   
