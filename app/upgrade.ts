import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';
import { FavoriteButton } from './artists/favorite.component';

@NgModule({
  imports: [BrowserModule],
//  declarations: [FavoriteButton]
})
class AppModule {}

export const adapter = new UpgradeAdapter(forwardRef(() => AppModule));
