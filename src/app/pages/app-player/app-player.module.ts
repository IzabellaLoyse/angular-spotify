import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPlayerRoutingModule } from './app-player-routing.module';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, AppPlayerRoutingModule],
})
export class AppPlayerModule {}
