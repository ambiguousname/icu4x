import { CaseMapper } from "../CaseMapper.mjs"
import { Locale } from "../Locale.mjs"
import { TitlecaseOptions } from "../TitlecaseOptions.mjs"
export function lowercase(provider: DataProvider, s: string, name: string);
export function uppercase(provider: DataProvider, s: string, name: string);
export function titlecaseSegmentWithOnlyCaseData(provider: DataProvider, s: string, name: string, leading_adjustment: LeadingAdjustment, trailing_case: TrailingCase);
export function fold(provider: DataProvider, s: string);
export function foldTurkic(provider: DataProvider, s: string);
