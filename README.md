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
    * [map](app/src/app/feature/map)
        * map
    * [review](app/src/app/feature/review)
        * review-form
        * review-list
    * [travel](app/src/app/feature/travel)
        * travel-details
        * travel-list

<br>

* **[shared](app/src/app/shared)** - _folder with shared standalone components_

<br>

* other features:
    * <x>dynamic scss variables</x> - _app.component.ts_
    * <x>theme</x> - _app.config.ts, styles.scss_
