import basse from '../base';
import $ from '@/utils/http';

/*  */
export const getData = (data: any) => {
    return $.Ajax({ url: basse.sosBase + '', method: 'GET', ...data });
}

