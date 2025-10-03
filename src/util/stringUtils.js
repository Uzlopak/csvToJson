'use strict';

class StringUtils {

    trimPropertyName(removeAllWhiteSpace,value) {
        return removeAllWhiteSpace
            ? value.replace(/\s/g, '')
            : value.trim();
    }

    getValueFormatByType(value) {
        if(value === undefined || value === ''){
            return '';
        }
        //is Number
        if (!isNaN(value)) {
            return +value;
        }
        // is Boolean
        if(value === "true" || value === "false"){
            return value === 'true' ? true : false;
        }
        return `${value}`;
    }

    hasContent(values) {
        if (values && values.length > 0) {
            for (let i = 0; i < values.length; i++) {
                if (values[i]) {
                    return true;
                }
            }
        }
        return false;
    }
}

module.exports = new StringUtils();
