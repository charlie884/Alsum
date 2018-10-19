import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "PresentacionesCongreso",
    moduleId: module.id,
    templateUrl: "./presentacionesCongreso.component.html"
})
export class PresentacionesCongresoComponent implements OnInit {
    public myItems: Array<SegmentedBarItem>;
    public prop: string = "Item 1";

    constructor(private routerExtensions: RouterExtensions) {
        this.myItems = [];
        for (let i = 1; i < 6; i++) {
            const item = new SegmentedBarItem();
            item.title = "Tab " + i;
            this.myItems.push(item);
        }
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.prop = "Item" + (segmetedBar.selectedIndex + 1);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
