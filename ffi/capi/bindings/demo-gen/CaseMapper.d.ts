import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"
import { TitlecaseOptionsV1 } from "../TitlecaseOptionsV1.mjs"
export function lowercase(provider: DataProvider, s: string, name: string);
export function uppercase(provider: DataProvider, s: string, name: string);
export function titlecaseSegmentWithOnlyCaseDataV1(provider: DataProvider, s: string, name: string, leading_adjustment: LeadingAdjustment, trailing_case: TrailingCase);
export function fold(provider: DataProvider, s: string);
export function foldTurkic(provider: DataProvider, s: string);
