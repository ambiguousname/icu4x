import * as CaseMapperDemo from "./CaseMapper.mjs";
export * as CaseMapperDemo from "./CaseMapper.mjs";
import * as TitlecaseMapperDemo from "./TitlecaseMapper.mjs";
export * as TitlecaseMapperDemo from "./TitlecaseMapper.mjs";
import * as DateDemo from "./Date.mjs";
export * as DateDemo from "./Date.mjs";
import * as DateTimeDemo from "./DateTime.mjs";
export * as DateTimeDemo from "./DateTime.mjs";
import * as DateFormatterDemo from "./DateFormatter.mjs";
export * as DateFormatterDemo from "./DateFormatter.mjs";
import * as DateTimeFormatterDemo from "./DateTimeFormatter.mjs";
export * as DateTimeFormatterDemo from "./DateTimeFormatter.mjs";
import * as GregorianDateFormatterDemo from "./GregorianDateFormatter.mjs";
export * as GregorianDateFormatterDemo from "./GregorianDateFormatter.mjs";
import * as GregorianDateTimeFormatterDemo from "./GregorianDateTimeFormatter.mjs";
export * as GregorianDateTimeFormatterDemo from "./GregorianDateTimeFormatter.mjs";
import * as TimeFormatterDemo from "./TimeFormatter.mjs";
export * as TimeFormatterDemo from "./TimeFormatter.mjs";
import * as FixedDecimalFormatterDemo from "./FixedDecimalFormatter.mjs";
export * as FixedDecimalFormatterDemo from "./FixedDecimalFormatter.mjs";
import * as LocaleDisplayNamesFormatterDemo from "./LocaleDisplayNamesFormatter.mjs";
export * as LocaleDisplayNamesFormatterDemo from "./LocaleDisplayNamesFormatter.mjs";
import * as RegionDisplayNamesDemo from "./RegionDisplayNames.mjs";
export * as RegionDisplayNamesDemo from "./RegionDisplayNames.mjs";
import * as FixedDecimalDemo from "./FixedDecimal.mjs";
export * as FixedDecimalDemo from "./FixedDecimal.mjs";
import * as ListFormatterDemo from "./ListFormatter.mjs";
export * as ListFormatterDemo from "./ListFormatter.mjs";
import * as LocaleDemo from "./Locale.mjs";
export * as LocaleDemo from "./Locale.mjs";
import * as ComposingNormalizerDemo from "./ComposingNormalizer.mjs";
export * as ComposingNormalizerDemo from "./ComposingNormalizer.mjs";
import * as DecomposingNormalizerDemo from "./DecomposingNormalizer.mjs";
export * as DecomposingNormalizerDemo from "./DecomposingNormalizer.mjs";
import * as CustomTimeZoneDemo from "./CustomTimeZone.mjs";
export * as CustomTimeZoneDemo from "./CustomTimeZone.mjs";
import * as TimeZoneFormatterDemo from "./TimeZoneFormatter.mjs";
export * as TimeZoneFormatterDemo from "./TimeZoneFormatter.mjs";
import * as TimeZoneIdMapperDemo from "./TimeZoneIdMapper.mjs";
export * as TimeZoneIdMapperDemo from "./TimeZoneIdMapper.mjs";
import * as TimeZoneIdMapperWithFastCanonicalizationDemo from "./TimeZoneIdMapperWithFastCanonicalization.mjs";
export * as TimeZoneIdMapperWithFastCanonicalizationDemo from "./TimeZoneIdMapperWithFastCanonicalization.mjs";
import * as GregorianZonedDateTimeFormatterDemo from "./GregorianZonedDateTimeFormatter.mjs";
export * as GregorianZonedDateTimeFormatterDemo from "./GregorianZonedDateTimeFormatter.mjs";
import * as ZonedDateTimeFormatterDemo from "./ZonedDateTimeFormatter.mjs";
export * as ZonedDateTimeFormatterDemo from "./ZonedDateTimeFormatter.mjs";
import * as AnyCalendarKindDemo from "./AnyCalendarKind.mjs";
export * as AnyCalendarKindDemo from "./AnyCalendarKind.mjs";


export const RenderInfo = {
	termini: [
		{
			func: CaseMapperDemo.lowercase,
			// For avoiding webpacking minifying issues:
			funcName: "CaseMapper.lowercase",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: CaseMapperDemo.uppercase,
			// For avoiding webpacking minifying issues:
			funcName: "CaseMapper.uppercase",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: CaseMapperDemo.titlecaseSegmentWithOnlyCaseDataV1,
			// For avoiding webpacking minifying issues:
			funcName: "CaseMapper.titlecaseSegmentWithOnlyCaseDataV1",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "leading_adjustment",
					type: "LeadingAdjustment"
				},
				
				{
					name: "trailing_case",
					type: "TrailingCase"
				}
				
			]
		},
		
		{
			func: CaseMapperDemo.fold,
			// For avoiding webpacking minifying issues:
			funcName: "CaseMapper.fold",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: CaseMapperDemo.foldTurkic,
			// For avoiding webpacking minifying issues:
			funcName: "CaseMapper.foldTurkic",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: TitlecaseMapperDemo.titlecaseSegmentV1,
			// For avoiding webpacking minifying issues:
			funcName: "TitlecaseMapper.titlecaseSegmentV1",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "leading_adjustment",
					type: "LeadingAdjustment"
				},
				
				{
					name: "trailing_case",
					type: "TrailingCase"
				}
				
			]
		},
		
		{
			func: DateDemo.monthCode,
			// For avoiding webpacking minifying issues:
			funcName: "Date.monthCode",
			parameters: [
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateDemo.era,
			// For avoiding webpacking minifying issues:
			funcName: "Date.era",
			parameters: [
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateTimeDemo.monthCode,
			// For avoiding webpacking minifying issues:
			funcName: "DateTime.monthCode",
			parameters: [
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateTimeDemo.era,
			// For avoiding webpacking minifying issues:
			funcName: "DateTime.era",
			parameters: [
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateFormatterDemo.formatDate,
			// For avoiding webpacking minifying issues:
			funcName: "DateFormatter.formatDate",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateFormatterDemo.formatIsoDate,
			// For avoiding webpacking minifying issues:
			funcName: "DateFormatter.formatIsoDate",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				}
				
			]
		},
		
		{
			func: DateFormatterDemo.formatDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "DateFormatter.formatDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateFormatterDemo.formatIsoDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "DateFormatter.formatIsoDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: DateTimeFormatterDemo.formatDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "DateTimeFormatter.formatDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: DateTimeFormatterDemo.formatIsoDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "DateTimeFormatter.formatIsoDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: GregorianDateFormatterDemo.formatIsoDate,
			// For avoiding webpacking minifying issues:
			funcName: "GregorianDateFormatter.formatIsoDate",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				}
				
			]
		},
		
		{
			func: GregorianDateFormatterDemo.formatIsoDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "GregorianDateFormatter.formatIsoDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "DateLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: GregorianDateTimeFormatterDemo.formatIsoDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "GregorianDateTimeFormatter.formatIsoDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: TimeFormatterDemo.formatTime,
			// For avoiding webpacking minifying issues:
			funcName: "TimeFormatter.formatTime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "TimeLength"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: TimeFormatterDemo.formatDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "TimeFormatter.formatDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeFormatterDemo.formatIsoDatetime,
			// For avoiding webpacking minifying issues:
			funcName: "TimeFormatter.formatIsoDatetime",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				}
				
			]
		},
		
		{
			func: FixedDecimalFormatterDemo.format,
			// For avoiding webpacking minifying issues:
			funcName: "FixedDecimalFormatter.format",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "groupingStrategy",
					type: "FixedDecimalGroupingStrategy"
				},
				
				{
					name: "f",
					type: "number"
				}
				
			]
		},
		
		{
			func: LocaleDisplayNamesFormatterDemo.of,
			// For avoiding webpacking minifying issues:
			funcName: "LocaleDisplayNamesFormatter.of",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "style",
					type: "DisplayNamesStyle"
				},
				
				{
					name: "fallback",
					type: "DisplayNamesFallback"
				},
				
				{
					name: "language_display",
					type: "LanguageDisplay"
				},
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: RegionDisplayNamesDemo.of,
			// For avoiding webpacking minifying issues:
			funcName: "RegionDisplayNames.of",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "region",
					type: "string"
				}
				
			]
		},
		
		{
			func: FixedDecimalDemo.toString,
			// For avoiding webpacking minifying issues:
			funcName: "FixedDecimal.toString",
			parameters: [
				
				{
					name: "f",
					type: "number"
				}
				
			]
		},
		
		{
			func: ListFormatterDemo.formatValidUtf8,
			// For avoiding webpacking minifying issues:
			funcName: "ListFormatter.formatValidUtf8",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "ListLength"
				},
				
				{
					name: "list",
					type: "Array<String>"
				}
				
			]
		},
		
		{
			func: ListFormatterDemo.formatUtf8,
			// For avoiding webpacking minifying issues:
			funcName: "ListFormatter.formatUtf8",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "ListLength"
				},
				
				{
					name: "list",
					type: "Array<String>"
				}
				
			]
		},
		
		{
			func: ListFormatterDemo.formatUtf16,
			// For avoiding webpacking minifying issues:
			funcName: "ListFormatter.formatUtf16",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "length",
					type: "ListLength"
				},
				
				{
					name: "list",
					type: "Array<String>"
				}
				
			]
		},
		
		{
			func: LocaleDemo.basename,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.basename",
			parameters: [
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.getUnicodeExtension,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.getUnicodeExtension",
			parameters: [
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.language,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.language",
			parameters: [
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.region,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.region",
			parameters: [
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.script,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.script",
			parameters: [
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.canonicalize,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.canonicalize",
			parameters: [
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: LocaleDemo.toString,
			// For avoiding webpacking minifying issues:
			funcName: "Locale.toString",
			parameters: [
				
				{
					name: "name",
					type: "string"
				}
				
			]
		},
		
		{
			func: ComposingNormalizerDemo.normalize,
			// For avoiding webpacking minifying issues:
			funcName: "ComposingNormalizer.normalize",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: DecomposingNormalizerDemo.normalize,
			// For avoiding webpacking minifying issues:
			funcName: "DecomposingNormalizer.normalize",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: CustomTimeZoneDemo.timeZoneId,
			// For avoiding webpacking minifying issues:
			funcName: "CustomTimeZone.timeZoneId",
			parameters: [
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: CustomTimeZoneDemo.metazoneId,
			// For avoiding webpacking minifying issues:
			funcName: "CustomTimeZone.metazoneId",
			parameters: [
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: CustomTimeZoneDemo.zoneVariant,
			// For avoiding webpacking minifying issues:
			funcName: "CustomTimeZone.zoneVariant",
			parameters: [
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneFormatterDemo.formatCustomTimeZone,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneFormatter.formatCustomTimeZone",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneFormatterDemo.formatCustomTimeZoneNoFallback,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneFormatter.formatCustomTimeZoneNoFallback",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperDemo.ianaToBcp47,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapper.ianaToBcp47",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperDemo.normalizeIana,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapper.normalizeIana",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperDemo.canonicalizeIana,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapper.canonicalizeIana",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperDemo.findCanonicalIanaFromBcp47,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapper.findCanonicalIanaFromBcp47",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperWithFastCanonicalizationDemo.canonicalizeIana,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapperWithFastCanonicalization.canonicalizeIana",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: TimeZoneIdMapperWithFastCanonicalizationDemo.canonicalIanaFromBcp47,
			// For avoiding webpacking minifying issues:
			funcName: "TimeZoneIdMapperWithFastCanonicalization.canonicalIanaFromBcp47",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "value",
					type: "string"
				}
				
			]
		},
		
		{
			func: GregorianZonedDateTimeFormatterDemo.formatIsoDatetimeWithCustomTimeZone,
			// For avoiding webpacking minifying issues:
			funcName: "GregorianZonedDateTimeFormatter.formatIsoDatetimeWithCustomTimeZone",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: ZonedDateTimeFormatterDemo.formatDatetimeWithCustomTimeZone,
			// For avoiding webpacking minifying issues:
			funcName: "ZonedDateTimeFormatter.formatDatetimeWithCustomTimeZone",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: ZonedDateTimeFormatterDemo.formatIsoDatetimeWithCustomTimeZone,
			// For avoiding webpacking minifying issues:
			funcName: "ZonedDateTimeFormatter.formatIsoDatetimeWithCustomTimeZone",
			parameters: [
				
				{
					name: "provider",
					type: "DataProvider"
				},
				
				{
					name: "name",
					type: "string"
				},
				
				{
					name: "dateLength",
					type: "DateLength"
				},
				
				{
					name: "timeLength",
					type: "TimeLength"
				},
				
				{
					name: "year",
					type: "number"
				},
				
				{
					name: "month",
					type: "number"
				},
				
				{
					name: "day",
					type: "number"
				},
				
				{
					name: "hour",
					type: "number"
				},
				
				{
					name: "minute",
					type: "number"
				},
				
				{
					name: "second",
					type: "number"
				},
				
				{
					name: "nanosecond",
					type: "number"
				},
				
				{
					name: "s",
					type: "string"
				}
				
			]
		},
		
		{
			func: AnyCalendarKindDemo.bcp47,
			// For avoiding webpacking minifying issues:
			funcName: "AnyCalendarKind.bcp47",
			parameters: [
				
				{
					name: "self",
					type: "AnyCalendarKind"
				}
				
			]
		}
		],
};