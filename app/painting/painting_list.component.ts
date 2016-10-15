import { Painting } from '../common/painting/painting';

/** @ngInject */
export class PaintingListCmp {
    constructor(public paintings: Painting[]) { }
}
