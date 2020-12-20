import * as utils from '../../../utils/utils'

export default {
    name: 'QuestionnaireForm',
    props: {
    },
    created() {
        
    },
    data() {
        return {
            week: utils.getWeekSpace(new Date()),
            withoutTime: utils.withoutTime,
        };
    },
}