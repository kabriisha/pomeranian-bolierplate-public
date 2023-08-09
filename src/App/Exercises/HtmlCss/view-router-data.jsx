import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as cssColorsMetaData } from './Colors/router-data';
import { blockRouterMetaData as ImageFilesMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as BackgroundsMetaData } from './Backgrounds/router-data';
import { blockRouterMetaData as tableTennisMetaData } from './TableTennis/router-data';
import { blockRouterMetaData as arrayRenderingMetaData } from './ArrayRendering/router-data';
import { blockRouterMetaData as arrayRenderingToTableMetaData } from './ArrayRenderingToTable/router-data';
import { floatsAndPositioning } from './FloatsAndPositioning/router-data';



export const blockRouterMetaData = [blockRouterMetaData121220231,
    cssColorsMetaData,
    ImageFilesMetaData,
    BackgroundsMetaData,
    tableTennisMetaData,
    arrayRenderingMetaData,
    arrayRenderingToTableMetaData,
    floatsAndPositioning,];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
