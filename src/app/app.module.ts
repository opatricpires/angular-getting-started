import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
