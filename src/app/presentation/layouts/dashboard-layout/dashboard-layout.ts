import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterModule],
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {
   public routes = routes[0].children?.filter( (route) => route.data );
}
