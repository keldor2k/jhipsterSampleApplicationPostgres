import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationPostgresCategoryModule } from './category/category.module';
import { JhipsterSampleApplicationPostgresProductModule } from './product/product.module';
import { JhipsterSampleApplicationPostgresCustomerModule } from './customer/customer.module';
import { JhipsterSampleApplicationPostgresAddressModule } from './address/address.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationPostgresCategoryModule,
        JhipsterSampleApplicationPostgresProductModule,
        JhipsterSampleApplicationPostgresCustomerModule,
        JhipsterSampleApplicationPostgresAddressModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationPostgresEntityModule {}
