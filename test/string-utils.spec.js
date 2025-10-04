'use strict';

const CsvToJson = require('../src/csv-to-json.js');

describe('StringUtils class testing', function () {

    describe('trimPropertyName()', function () {

        it('Should trim input value with empty spaces', function () {
            //given
            let value = ' val ue \n bla ';

            //when
            let result = new CsvToJson({ trimHeaderFieldWhiteSpace: true })
                .csvStringToJson(value);

            //then
            expect(Object.keys(result[0])[0]).toEqual('value');
        });

        it('Should trim input value without empty spaces', function () {
            //given
            let value = ' val ue \n bla ';

            //when
            let result = new CsvToJson({ trimHeaderFieldWhiteSpace: false })
                .csvStringToJson(value);

            //then
            expect(Object.keys(result[0])[0]).toEqual('val ue');
        });
    });

    describe('getValueFormatByType()', function () {
        it('should return type of Number for integers', function () {
            //given
            let value = '23';

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('number');
            expect(result).toEqual(23);
        });

        it('should return type of Number for non-integers', function () {
            //given
            let value = '0.23';

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('number');
            expect(result).toEqual(0.23);
        });

        it('should return type of String when value contains only words', function () {
            //given
            let value = 'value';

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('string');
            expect(result).toEqual('value');
        });

        it('should return type of String when value contains words and digits', function () {
            //given
            let value = '11value';

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('string');
            expect(result).toEqual('11value');
        });

        it('should return empty value when input value is not defined', function () {
            //given
            let value;

            //when
            let result = new CsvToJson({ delimiter: ',', printValueFormatByType: true })
                .csvStringToJson(`key1,key2\n,value2`)[0].key1;

            //then
            expect(typeof result).toEqual('string');
            expect(result).toEqual('');
        });

        it('should return empty value when input value is empty string', function () {
            //given
            let value = '';

            //when
            let result = new CsvToJson({ delimiter: ',', printValueFormatByType: true })
                .csvStringToJson(`key1, key2\n${value},value`)[0].key1;

            //then
            expect(typeof result).toEqual('string');
            expect(result).toEqual('');
        });

        it('should return Boolean value when input value is "true"', function () {
            //given
            let value = "true";

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('boolean');
            expect(result).toEqual(true);
        });

        it('should return Boolean value when input value is "false"', function () {
            //given
            let value = "false";

            //when
            let result = new CsvToJson({ printValueFormatByType: true })
                .csvStringToJson(`key\n${value}`)[0].key;

            //then
            expect(typeof result).toEqual('boolean');
            expect(result).toEqual(false);
        });

    });

});
