import { forwardRef } from '@angular/core';
import { AppModule } from './app2.module';
import { configureModuleRoot } from './upgrade/router_upgrade';
import { UpgradeAdapter } from '@angular/upgrade';
import { Ng2RouteModule } from './ng2.routes';

// Upgrade adapter
export const adapter = new UpgradeAdapter(forwardRef(() => AppModule));

configureModuleRoot(adapter, Ng2RouteModule);

// Upgrade ng1 services to ng2
adapter.upgradeNg1Provider('artistService');
adapter.upgradeNg1Provider('loadingService');
