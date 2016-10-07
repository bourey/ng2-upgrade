import { AppModule } from './app2.module';
import { configureModuleRoot } from './upgrade/router_upgrade';
import { UpgradeAdapter } from '@angular/upgrade';
import { Ng2RouteModule } from './ng2.routes';

// Upgrade adapter
export const adapter = new UpgradeAdapter(AppModule);

configureModuleRoot(adapter, Ng2RouteModule);
