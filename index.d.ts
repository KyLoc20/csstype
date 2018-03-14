export interface StandardLonghandProperties<TLength = string | 0> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animationDelay?: GlobalsString;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: GlobalsString;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty<TLength>;
  blockSize?: BlockSizeProperty<TLength>;
  borderBlockEndColor?: BorderBlockEndColorProperty;
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  borderBlockStartColor?: BorderBlockStartColorProperty;
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: BorderImageSliceProperty;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  borderInlineEndColor?: BorderInlineEndColorProperty;
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  borderInlineStartColor?: BorderInlineStartColorProperty;
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: BorderSpacingProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxAlign?: BoxAlignProperty;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxDirection?: BoxDirectionProperty;
  boxFlex?: GlobalsNumber;
  boxFlexGroup?: GlobalsNumber;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: GlobalsNumber;
  boxOrient?: BoxOrientProperty;
  boxPack?: BoxPackProperty;
  boxShadow?: BoxShadowProperty<TLength>;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: ColumnRuleStyleProperty;
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  displayInside?: DisplayInsideProperty;
  displayList?: DisplayListProperty;
  displayOutside?: DisplayOutsideProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flexBasis?: FlexBasisProperty<TLength>;
  flexDirection?: FlexDirectionProperty;
  flexGrow?: GlobalsNumber;
  flexShrink?: GlobalsNumber;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantAlternates?: FontVariantAlternatesProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontWeight?: FontWeightProperty;
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridColumnStart?: GridColumnStartProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowGap?: GridRowGapProperty<TLength>;
  gridRowStart?: GridRowStartProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  hangingPunctuation?: HangingPunctuationProperty;
  height?: HeightProperty<TLength>;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  imageResolution?: ImageResolutionProperty;
  imeMode?: ImeModeProperty;
  initialLetter?: InitialLetterProperty;
  initialLetterAlign?: InitialLetterAlignProperty;
  inlineSize?: InlineSizeProperty<TLength>;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  lineHeightStep?: LineHeightStepProperty<TLength>;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  maskBorderMode?: MaskBorderModeProperty;
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  maskBorderRepeat?: MaskBorderRepeatProperty;
  maskBorderSlice?: MaskBorderSliceProperty;
  maskBorderSource?: MaskBorderSourceProperty;
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: MaskPositionProperty<TLength>;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty<TLength>;
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: MinBlockSizeProperty<TLength>;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: MinInlineSizeProperty<TLength>;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<TLength>;
  offsetAnchor?: OffsetAnchorProperty<TLength>;
  offsetBlockEnd?: OffsetBlockEndProperty<TLength>;
  offsetBlockStart?: OffsetBlockStartProperty<TLength>;
  offsetInlineEnd?: OffsetInlineEndProperty<TLength>;
  offsetInlineStart?: OffsetInlineStartProperty<TLength>;
  offsetDistance?: OffsetDistanceProperty<TLength>;
  offsetPath?: OffsetPathProperty;
  offsetPosition?: OffsetPositionProperty<TLength>;
  offsetRotate?: OffsetRotateProperty;
  opacity?: GlobalsNumber;
  order?: GlobalsNumber;
  orphans?: GlobalsNumber;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>;
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>;
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  shapeImageThreshold?: GlobalsNumber;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: GlobalsString;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: TextIndentProperty<TLength>;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty<TLength>;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: TransformOriginProperty<TLength>;
  transformStyle?: TransformStyleProperty;
  transitionDelay?: GlobalsString;
  transitionDuration?: GlobalsString;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: GlobalsNumber;
  width?: WidthProperty<TLength>;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
}

export interface StandardShorthandProperties<TLength = string | 0> {
  animation?: AnimationProperty;
  background?: BackgroundProperty<TLength>;
  border?: BorderProperty<TLength>;
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  borderBottom?: BorderBottomProperty<TLength>;
  borderColor?: BorderColorProperty;
  borderImage?: BorderImageProperty;
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  borderLeft?: BorderLeftProperty<TLength>;
  borderRadius?: BorderRadiusProperty<TLength>;
  borderRight?: BorderRightProperty<TLength>;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  columnRule?: ColumnRuleProperty<TLength>;
  columns?: ColumnsProperty<TLength>;
  flex?: FlexProperty<TLength>;
  flexFlow?: FlexFlowProperty;
  font?: FontProperty;
  grid?: GridProperty;
  gridArea?: GlobalsString;
  gridColumn?: GridColumnProperty;
  gridGap?: GridGapProperty<TLength>;
  gridRow?: GridRowProperty;
  gridTemplate?: GridTemplateProperty;
  listStyle?: ListStyleProperty;
  margin?: MarginProperty<TLength>;
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  offset?: OffsetProperty<TLength>;
  outline?: OutlineProperty<TLength>;
  padding?: PaddingProperty<TLength>;
  textDecoration?: TextDecorationProperty;
  textEmphasis?: TextEmphasisProperty;
  transition?: TransitionProperty;
}

export interface StandardProperties<TLength = string | 0> extends StandardLonghandProperties<TLength>, StandardShorthandProperties<TLength> {}

export interface VendorLonghandProperties<TLength = string | 0> {
  MsOverflowStyle?: MsOverflowStyleProperty;
  MozAppearance?: MozAppearanceProperty;
  MozBinding?: MozBindingProperty;
  MozBorderBottomColors?: MozBorderBottomColorsProperty;
  MozBorderLeftColors?: MozBorderLeftColorsProperty;
  MozBorderRightColors?: MozBorderRightColorsProperty;
  MozBorderTopColors?: MozBorderTopColorsProperty;
  MozContextProperties?: MozContextPropertiesProperty;
  MozFloatEdge?: MozFloatEdgeProperty;
  MozForceBrokenImageIcon?: GlobalsNumber;
  MozImageRegion?: MozImageRegionProperty;
  MozOrient?: MozOrientProperty;
  MozOutlineRadiusBottomleft?: GlobalsString;
  MozOutlineRadiusBottomright?: GlobalsString;
  MozOutlineRadiusTopleft?: GlobalsString;
  MozOutlineRadiusTopright?: GlobalsString;
  MozStackSizing?: MozStackSizingProperty;
  MozTextBlink?: MozTextBlinkProperty;
  MozUserFocus?: MozUserFocusProperty;
  MozUserInput?: MozUserInputProperty;
  MozUserModify?: MozUserModifyProperty;
  MozWindowDragging?: MozWindowDraggingProperty;
  MozWindowShadow?: MozWindowShadowProperty;
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>;
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>;
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
  WebkitMaskClip?: WebkitMaskClipProperty;
  WebkitMaskComposite?: WebkitMaskCompositeProperty;
  WebkitMaskImage?: GlobalsString;
  WebkitMaskOrigin?: WebkitMaskOriginProperty;
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  WebkitMaskRepeat?: WebkitMaskRepeatProperty;
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  WebkitTextFillColor?: WebkitTextFillColorProperty;
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  WebkitTouchCallout?: WebkitTouchCalloutProperty;
}

export interface VendorShorthandProperties<TLength = string | 0> {
  MozOutlineRadius?: GlobalsString;
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength>;
  WebkitMask?: GlobalsString;
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength>;
}

export interface VendorProperties<TLength = string | 0> extends VendorLonghandProperties<TLength>, VendorShorthandProperties<TLength> {}

export interface Properties<TLength = string | 0> extends StandardProperties<TLength>, VendorProperties<TLength> {}

export interface StandardLonghandPropertiesHyphen<TLength = string | 0> {
  "align-content"?: AlignContentProperty;
  "align-items"?: AlignItemsProperty;
  "align-self"?: AlignSelfProperty;
  "animation-delay"?: GlobalsString;
  "animation-direction"?: AnimationDirectionProperty;
  "animation-duration"?: GlobalsString;
  "animation-fill-mode"?: AnimationFillModeProperty;
  "animation-iteration-count"?: AnimationIterationCountProperty;
  "animation-name"?: AnimationNameProperty;
  "animation-play-state"?: AnimationPlayStateProperty;
  "animation-timing-function"?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  "backdrop-filter"?: BackdropFilterProperty;
  "backface-visibility"?: BackfaceVisibilityProperty;
  "background-attachment"?: BackgroundAttachmentProperty;
  "background-blend-mode"?: BackgroundBlendModeProperty;
  "background-clip"?: BackgroundClipProperty;
  "background-color"?: BackgroundColorProperty;
  "background-image"?: BackgroundImageProperty;
  "background-origin"?: BackgroundOriginProperty;
  "background-position"?: BackgroundPositionProperty<TLength>;
  "background-position-x"?: BackgroundPositionXProperty<TLength>;
  "background-position-y"?: BackgroundPositionYProperty<TLength>;
  "background-repeat"?: BackgroundRepeatProperty;
  "background-size"?: BackgroundSizeProperty<TLength>;
  "block-size"?: BlockSizeProperty<TLength>;
  "border-block-end-color"?: BorderBlockEndColorProperty;
  "border-block-end-style"?: BorderBlockEndStyleProperty;
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength>;
  "border-block-start-color"?: BorderBlockStartColorProperty;
  "border-block-start-style"?: BorderBlockStartStyleProperty;
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength>;
  "border-bottom-color"?: BorderBottomColorProperty;
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  "border-bottom-style"?: BorderBottomStyleProperty;
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>;
  "border-collapse"?: BorderCollapseProperty;
  "border-image-outset"?: BorderImageOutsetProperty<TLength>;
  "border-image-repeat"?: BorderImageRepeatProperty;
  "border-image-slice"?: BorderImageSliceProperty;
  "border-image-source"?: BorderImageSourceProperty;
  "border-image-width"?: BorderImageWidthProperty<TLength>;
  "border-inline-end-color"?: BorderInlineEndColorProperty;
  "border-inline-end-style"?: BorderInlineEndStyleProperty;
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength>;
  "border-inline-start-color"?: BorderInlineStartColorProperty;
  "border-inline-start-style"?: BorderInlineStartStyleProperty;
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength>;
  "border-left-color"?: BorderLeftColorProperty;
  "border-left-style"?: BorderLeftStyleProperty;
  "border-left-width"?: BorderLeftWidthProperty<TLength>;
  "border-right-color"?: BorderRightColorProperty;
  "border-right-style"?: BorderRightStyleProperty;
  "border-right-width"?: BorderRightWidthProperty<TLength>;
  "border-spacing"?: BorderSpacingProperty<TLength>;
  "border-top-color"?: BorderTopColorProperty;
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  "border-top-style"?: BorderTopStyleProperty;
  "border-top-width"?: BorderTopWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  "box-align"?: BoxAlignProperty;
  "box-decoration-break"?: BoxDecorationBreakProperty;
  "box-direction"?: BoxDirectionProperty;
  "box-flex"?: GlobalsNumber;
  "box-flex-group"?: GlobalsNumber;
  "box-lines"?: BoxLinesProperty;
  "box-ordinal-group"?: GlobalsNumber;
  "box-orient"?: BoxOrientProperty;
  "box-pack"?: BoxPackProperty;
  "box-shadow"?: BoxShadowProperty<TLength>;
  "box-sizing"?: BoxSizingProperty;
  "break-after"?: BreakAfterProperty;
  "break-before"?: BreakBeforeProperty;
  "break-inside"?: BreakInsideProperty;
  "caption-side"?: CaptionSideProperty;
  "caret-color"?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  "clip-path"?: ClipPathProperty;
  color?: ColorProperty;
  "column-count"?: ColumnCountProperty;
  "column-fill"?: ColumnFillProperty;
  "column-gap"?: ColumnGapProperty<TLength>;
  "column-rule-color"?: ColumnRuleColorProperty;
  "column-rule-style"?: ColumnRuleStyleProperty;
  "column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  "column-span"?: ColumnSpanProperty;
  "column-width"?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  content?: ContentProperty;
  "counter-increment"?: CounterIncrementProperty;
  "counter-reset"?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  "display-inside"?: DisplayInsideProperty;
  "display-list"?: DisplayListProperty;
  "display-outside"?: DisplayOutsideProperty;
  "empty-cells"?: EmptyCellsProperty;
  filter?: FilterProperty;
  "flex-basis"?: FlexBasisProperty<TLength>;
  "flex-direction"?: FlexDirectionProperty;
  "flex-grow"?: GlobalsNumber;
  "flex-shrink"?: GlobalsNumber;
  "flex-wrap"?: FlexWrapProperty;
  float?: FloatProperty;
  "font-family"?: FontFamilyProperty;
  "font-feature-settings"?: FontFeatureSettingsProperty;
  "font-kerning"?: FontKerningProperty;
  "font-language-override"?: FontLanguageOverrideProperty;
  "font-variation-settings"?: FontVariationSettingsProperty;
  "font-size"?: FontSizeProperty<TLength>;
  "font-size-adjust"?: FontSizeAdjustProperty;
  "font-stretch"?: FontStretchProperty;
  "font-style"?: FontStyleProperty;
  "font-synthesis"?: FontSynthesisProperty;
  "font-variant"?: FontVariantProperty;
  "font-variant-alternates"?: FontVariantAlternatesProperty;
  "font-variant-caps"?: FontVariantCapsProperty;
  "font-variant-east-asian"?: FontVariantEastAsianProperty;
  "font-variant-ligatures"?: FontVariantLigaturesProperty;
  "font-variant-numeric"?: FontVariantNumericProperty;
  "font-variant-position"?: FontVariantPositionProperty;
  "font-weight"?: FontWeightProperty;
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength>;
  "grid-auto-flow"?: GridAutoFlowProperty;
  "grid-auto-rows"?: GridAutoRowsProperty<TLength>;
  "grid-column-end"?: GridColumnEndProperty;
  "grid-column-gap"?: GridColumnGapProperty<TLength>;
  "grid-column-start"?: GridColumnStartProperty;
  "grid-row-end"?: GridRowEndProperty;
  "grid-row-gap"?: GridRowGapProperty<TLength>;
  "grid-row-start"?: GridRowStartProperty;
  "grid-template-areas"?: GridTemplateAreasProperty;
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength>;
  "grid-template-rows"?: GridTemplateRowsProperty<TLength>;
  "hanging-punctuation"?: HangingPunctuationProperty;
  height?: HeightProperty<TLength>;
  hyphens?: HyphensProperty;
  "image-orientation"?: ImageOrientationProperty;
  "image-rendering"?: ImageRenderingProperty;
  "image-resolution"?: ImageResolutionProperty;
  "ime-mode"?: ImeModeProperty;
  "initial-letter"?: InitialLetterProperty;
  "initial-letter-align"?: InitialLetterAlignProperty;
  "inline-size"?: InlineSizeProperty<TLength>;
  isolation?: IsolationProperty;
  "justify-content"?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  "line-break"?: LineBreakProperty;
  "line-height"?: LineHeightProperty<TLength>;
  "line-height-step"?: LineHeightStepProperty<TLength>;
  "list-style-image"?: ListStyleImageProperty;
  "list-style-position"?: ListStylePositionProperty;
  "list-style-type"?: ListStyleTypeProperty;
  "margin-block-end"?: MarginBlockEndProperty<TLength>;
  "margin-block-start"?: MarginBlockStartProperty<TLength>;
  "margin-bottom"?: MarginBottomProperty<TLength>;
  "margin-inline-end"?: MarginInlineEndProperty<TLength>;
  "margin-inline-start"?: MarginInlineStartProperty<TLength>;
  "margin-left"?: MarginLeftProperty<TLength>;
  "margin-right"?: MarginRightProperty<TLength>;
  "margin-top"?: MarginTopProperty<TLength>;
  "mask-border-mode"?: MaskBorderModeProperty;
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength>;
  "mask-border-repeat"?: MaskBorderRepeatProperty;
  "mask-border-slice"?: MaskBorderSliceProperty;
  "mask-border-source"?: MaskBorderSourceProperty;
  "mask-border-width"?: MaskBorderWidthProperty<TLength>;
  "mask-clip"?: MaskClipProperty;
  "mask-composite"?: MaskCompositeProperty;
  "mask-image"?: MaskImageProperty;
  "mask-mode"?: MaskModeProperty;
  "mask-origin"?: MaskOriginProperty;
  "mask-position"?: MaskPositionProperty<TLength>;
  "mask-repeat"?: MaskRepeatProperty;
  "mask-size"?: MaskSizeProperty<TLength>;
  "mask-type"?: MaskTypeProperty;
  "max-block-size"?: MaxBlockSizeProperty<TLength>;
  "max-height"?: MaxHeightProperty<TLength>;
  "max-inline-size"?: MaxInlineSizeProperty<TLength>;
  "max-width"?: MaxWidthProperty<TLength>;
  "min-block-size"?: MinBlockSizeProperty<TLength>;
  "min-height"?: MinHeightProperty<TLength>;
  "min-inline-size"?: MinInlineSizeProperty<TLength>;
  "min-width"?: MinWidthProperty<TLength>;
  "mix-blend-mode"?: MixBlendModeProperty;
  "object-fit"?: ObjectFitProperty;
  "object-position"?: ObjectPositionProperty<TLength>;
  "offset-anchor"?: OffsetAnchorProperty<TLength>;
  "offset-block-end"?: OffsetBlockEndProperty<TLength>;
  "offset-block-start"?: OffsetBlockStartProperty<TLength>;
  "offset-inline-end"?: OffsetInlineEndProperty<TLength>;
  "offset-inline-start"?: OffsetInlineStartProperty<TLength>;
  "offset-distance"?: OffsetDistanceProperty<TLength>;
  "offset-path"?: OffsetPathProperty;
  "offset-position"?: OffsetPositionProperty<TLength>;
  "offset-rotate"?: OffsetRotateProperty;
  opacity?: GlobalsNumber;
  order?: GlobalsNumber;
  orphans?: GlobalsNumber;
  "outline-color"?: OutlineColorProperty;
  "outline-offset"?: OutlineOffsetProperty<TLength>;
  "outline-style"?: OutlineStyleProperty;
  "outline-width"?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  "overflow-clip-box"?: OverflowClipBoxProperty;
  "overflow-wrap"?: OverflowWrapProperty;
  "overflow-x"?: OverflowXProperty;
  "overflow-y"?: OverflowYProperty;
  "padding-block-end"?: PaddingBlockEndProperty<TLength>;
  "padding-block-start"?: PaddingBlockStartProperty<TLength>;
  "padding-bottom"?: PaddingBottomProperty<TLength>;
  "padding-inline-end"?: PaddingInlineEndProperty<TLength>;
  "padding-inline-start"?: PaddingInlineStartProperty<TLength>;
  "padding-left"?: PaddingLeftProperty<TLength>;
  "padding-right"?: PaddingRightProperty<TLength>;
  "padding-top"?: PaddingTopProperty<TLength>;
  "page-break-after"?: PageBreakAfterProperty;
  "page-break-before"?: PageBreakBeforeProperty;
  "page-break-inside"?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  "perspective-origin"?: PerspectiveOriginProperty<TLength>;
  "pointer-events"?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  "ruby-align"?: RubyAlignProperty;
  "ruby-merge"?: RubyMergeProperty;
  "ruby-position"?: RubyPositionProperty;
  "scroll-behavior"?: ScrollBehaviorProperty;
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength>;
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength>;
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty;
  "scroll-snap-type"?: ScrollSnapTypeProperty;
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty;
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty;
  "shape-image-threshold"?: GlobalsNumber;
  "shape-margin"?: ShapeMarginProperty<TLength>;
  "shape-outside"?: ShapeOutsideProperty;
  "tab-size"?: TabSizeProperty<TLength>;
  "table-layout"?: TableLayoutProperty;
  "text-align"?: TextAlignProperty;
  "text-align-last"?: TextAlignLastProperty;
  "text-combine-upright"?: TextCombineUprightProperty;
  "text-decoration-color"?: TextDecorationColorProperty;
  "text-decoration-line"?: TextDecorationLineProperty;
  "text-decoration-skip"?: TextDecorationSkipProperty;
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty;
  "text-decoration-style"?: TextDecorationStyleProperty;
  "text-emphasis-color"?: TextEmphasisColorProperty;
  "text-emphasis-position"?: GlobalsString;
  "text-emphasis-style"?: TextEmphasisStyleProperty;
  "text-indent"?: TextIndentProperty<TLength>;
  "text-justify"?: TextJustifyProperty;
  "text-orientation"?: TextOrientationProperty;
  "text-overflow"?: TextOverflowProperty;
  "text-rendering"?: TextRenderingProperty;
  "text-shadow"?: TextShadowProperty<TLength>;
  "text-size-adjust"?: TextSizeAdjustProperty;
  "text-transform"?: TextTransformProperty;
  "text-underline-position"?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  "touch-action"?: TouchActionProperty;
  transform?: TransformProperty;
  "transform-box"?: TransformBoxProperty;
  "transform-origin"?: TransformOriginProperty<TLength>;
  "transform-style"?: TransformStyleProperty;
  "transition-delay"?: GlobalsString;
  "transition-duration"?: GlobalsString;
  "transition-property"?: TransitionPropertyProperty;
  "transition-timing-function"?: TransitionTimingFunctionProperty;
  "unicode-bidi"?: UnicodeBidiProperty;
  "user-select"?: UserSelectProperty;
  "vertical-align"?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  "white-space"?: WhiteSpaceProperty;
  widows?: GlobalsNumber;
  width?: WidthProperty<TLength>;
  "will-change"?: WillChangeProperty;
  "word-break"?: WordBreakProperty;
  "word-spacing"?: WordSpacingProperty<TLength>;
  "word-wrap"?: WordWrapProperty;
  "writing-mode"?: WritingModeProperty;
  "z-index"?: ZIndexProperty;
}

export interface StandardShorthandPropertiesHyphen<TLength = string | 0> {
  animation?: AnimationProperty;
  background?: BackgroundProperty<TLength>;
  border?: BorderProperty<TLength>;
  "border-block-end"?: BorderBlockEndProperty<TLength>;
  "border-block-start"?: BorderBlockStartProperty<TLength>;
  "border-bottom"?: BorderBottomProperty<TLength>;
  "border-color"?: BorderColorProperty;
  "border-image"?: BorderImageProperty;
  "border-inline-end"?: BorderInlineEndProperty<TLength>;
  "border-inline-start"?: BorderInlineStartProperty<TLength>;
  "border-left"?: BorderLeftProperty<TLength>;
  "border-radius"?: BorderRadiusProperty<TLength>;
  "border-right"?: BorderRightProperty<TLength>;
  "border-style"?: BorderStyleProperty;
  "border-top"?: BorderTopProperty<TLength>;
  "border-width"?: BorderWidthProperty<TLength>;
  "column-rule"?: ColumnRuleProperty<TLength>;
  columns?: ColumnsProperty<TLength>;
  flex?: FlexProperty<TLength>;
  "flex-flow"?: FlexFlowProperty;
  font?: FontProperty;
  grid?: GridProperty;
  "grid-area"?: GlobalsString;
  "grid-column"?: GridColumnProperty;
  "grid-gap"?: GridGapProperty<TLength>;
  "grid-row"?: GridRowProperty;
  "grid-template"?: GridTemplateProperty;
  "list-style"?: ListStyleProperty;
  margin?: MarginProperty<TLength>;
  mask?: MaskProperty<TLength>;
  "mask-border"?: MaskBorderProperty;
  offset?: OffsetProperty<TLength>;
  outline?: OutlineProperty<TLength>;
  padding?: PaddingProperty<TLength>;
  "text-decoration"?: TextDecorationProperty;
  "text-emphasis"?: TextEmphasisProperty;
  transition?: TransitionProperty;
}

export interface StandardPropertiesHyphen<TLength = string | 0> extends StandardLonghandPropertiesHyphen<TLength>, StandardShorthandPropertiesHyphen<TLength> {}

export interface VendorLonghandPropertiesHyphen<TLength = string | 0> {
  "-ms-overflow-style"?: MsOverflowStyleProperty;
  "-moz-appearance"?: MozAppearanceProperty;
  "-moz-binding"?: MozBindingProperty;
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty;
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty;
  "-moz-border-right-colors"?: MozBorderRightColorsProperty;
  "-moz-border-top-colors"?: MozBorderTopColorsProperty;
  "-moz-context-properties"?: MozContextPropertiesProperty;
  "-moz-float-edge"?: MozFloatEdgeProperty;
  "-moz-force-broken-image-icon"?: GlobalsNumber;
  "-moz-image-region"?: MozImageRegionProperty;
  "-moz-orient"?: MozOrientProperty;
  "-moz-outline-radius-bottomleft"?: GlobalsString;
  "-moz-outline-radius-bottomright"?: GlobalsString;
  "-moz-outline-radius-topleft"?: GlobalsString;
  "-moz-outline-radius-topright"?: GlobalsString;
  "-moz-stack-sizing"?: MozStackSizingProperty;
  "-moz-text-blink"?: MozTextBlinkProperty;
  "-moz-user-focus"?: MozUserFocusProperty;
  "-moz-user-input"?: MozUserInputProperty;
  "-moz-user-modify"?: MozUserModifyProperty;
  "-moz-window-dragging"?: MozWindowDraggingProperty;
  "-moz-window-shadow"?: MozWindowShadowProperty;
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty;
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty;
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength>;
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>;
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty;
  "-webkit-mask-clip"?: WebkitMaskClipProperty;
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty;
  "-webkit-mask-image"?: GlobalsString;
  "-webkit-mask-origin"?: WebkitMaskOriginProperty;
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>;
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>;
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>;
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty;
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty;
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty;
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty;
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty;
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty;
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty;
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>;
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty;
}

export interface VendorShorthandPropertiesHyphen<TLength = string | 0> {
  "-moz-outline-radius"?: GlobalsString;
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength>;
  "-webkit-mask"?: GlobalsString;
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>;
}

export interface VendorPropertiesHyphen<TLength = string | 0> extends VendorLonghandPropertiesHyphen<TLength>, VendorShorthandPropertiesHyphen<TLength> {}

export interface PropertiesHyphen<TLength = string | 0> extends StandardPropertiesHyphen<TLength>, VendorPropertiesHyphen<TLength> {}

export interface StandardLonghandPropertiesFallback<TLength = string | 0> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animationDelay?: GlobalsString | GlobalsString[];
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  animationDuration?: GlobalsString | GlobalsString[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  boxFlex?: GlobalsNumber | GlobalsNumber[];
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  boxPack?: BoxPackProperty | BoxPackProperty[];
  boxShadow?: BoxShadowProperty<TLength> | BoxShadowProperty<TLength>[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  displayInside?: DisplayInsideProperty | DisplayInsideProperty[];
  displayList?: DisplayListProperty | DisplayListProperty[];
  displayOutside?: DisplayOutsideProperty | DisplayOutsideProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  imeMode?: ImeModeProperty | ImeModeProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  offsetBlockEnd?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  offsetBlockStart?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  offsetInlineEnd?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  offsetInlineStart?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  order?: GlobalsNumber | GlobalsNumber[];
  orphans?: GlobalsNumber | GlobalsNumber[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty<TLength> | TextShadowProperty<TLength>[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transitionDelay?: GlobalsString | GlobalsString[];
  transitionDuration?: GlobalsString | GlobalsString[];
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: GlobalsNumber | GlobalsNumber[];
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
}

export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  animation?: AnimationProperty | AnimationProperty[];
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: BorderImageProperty | BorderImageProperty[];
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  font?: FontProperty | FontProperty[];
  grid?: GridProperty | GridProperty[];
  gridArea?: GlobalsString | GlobalsString[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  listStyle?: ListStyleProperty | ListStyleProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesFallback<TLength = string | 0> extends StandardLonghandPropertiesFallback<TLength>, StandardShorthandPropertiesFallback<TLength> {}

export interface VendorLonghandPropertiesFallback<TLength = string | 0> {
  MsOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  MozBinding?: MozBindingProperty | MozBindingProperty[];
  MozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  MozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  MozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  MozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  MozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[];
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  MozOrient?: MozOrientProperty | MozOrientProperty[];
  MozOutlineRadiusBottomleft?: GlobalsString | GlobalsString[];
  MozOutlineRadiusBottomright?: GlobalsString | GlobalsString[];
  MozOutlineRadiusTopleft?: GlobalsString | GlobalsString[];
  MozOutlineRadiusTopright?: GlobalsString | GlobalsString[];
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  WebkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  WebkitMaskImage?: GlobalsString | GlobalsString[];
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  WebkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  WebkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface VendorShorthandPropertiesFallback<TLength = string | 0> {
  MozOutlineRadius?: GlobalsString | GlobalsString[];
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  WebkitMask?: GlobalsString | GlobalsString[];
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
}

export interface VendorPropertiesFallback<TLength = string | 0> extends VendorLonghandPropertiesFallback<TLength>, VendorShorthandPropertiesFallback<TLength> {}

export interface PropertiesFallback<TLength = string | 0> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export interface StandardLonghandPropertiesHyphenFallback<TLength = string | 0> {
  "align-content"?: AlignContentProperty | AlignContentProperty[];
  "align-items"?: AlignItemsProperty | AlignItemsProperty[];
  "align-self"?: AlignSelfProperty | AlignSelfProperty[];
  "animation-delay"?: GlobalsString | GlobalsString[];
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  "animation-duration"?: GlobalsString | GlobalsString[];
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[];
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[];
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[];
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[];
  "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  "block-size"?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  "border-block-end-color"?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  "border-block-end-style"?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  "border-block-start-color"?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  "border-block-start-style"?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[];
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[];
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[];
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  "border-inline-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  "border-inline-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  "border-inline-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  "border-inline-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[];
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[];
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[];
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[];
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[];
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  "box-align"?: BoxAlignProperty | BoxAlignProperty[];
  "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  "box-flex"?: GlobalsNumber | GlobalsNumber[];
  "box-flex-group"?: GlobalsNumber | GlobalsNumber[];
  "box-lines"?: BoxLinesProperty | BoxLinesProperty[];
  "box-ordinal-group"?: GlobalsNumber | GlobalsNumber[];
  "box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  "box-pack"?: BoxPackProperty | BoxPackProperty[];
  "box-shadow"?: BoxShadowProperty<TLength> | BoxShadowProperty<TLength>[];
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  "break-after"?: BreakAfterProperty | BreakAfterProperty[];
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[];
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[];
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[];
  "caret-color"?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  "column-count"?: ColumnCountProperty | ColumnCountProperty[];
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  "column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  "column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[];
  "counter-reset"?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  "display-inside"?: DisplayInsideProperty | DisplayInsideProperty[];
  "display-list"?: DisplayListProperty | DisplayListProperty[];
  "display-outside"?: DisplayOutsideProperty | DisplayOutsideProperty[];
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  "flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  "flex-grow"?: GlobalsNumber | GlobalsNumber[];
  "flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  "font-kerning"?: FontKerningProperty | FontKerningProperty[];
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[];
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[];
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[];
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[];
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[];
  "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[];
  "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[];
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[];
  "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[];
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  hyphens?: HyphensProperty | HyphensProperty[];
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[];
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[];
  "ime-mode"?: ImeModeProperty | ImeModeProperty[];
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[];
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  "inline-size"?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  isolation?: IsolationProperty | IsolationProperty[];
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  "line-break"?: LineBreakProperty | LineBreakProperty[];
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[];
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[];
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[];
  "margin-block-end"?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  "margin-block-start"?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  "margin-inline-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  "margin-inline-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[];
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  "mask-border-slice"?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  "mask-clip"?: MaskClipProperty | MaskClipProperty[];
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[];
  "mask-image"?: MaskImageProperty | MaskImageProperty[];
  "mask-mode"?: MaskModeProperty | MaskModeProperty[];
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[];
  "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[];
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[];
  "max-block-size"?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  "max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  "min-block-size"?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  "min-inline-size"?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[];
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  "offset-block-end"?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  "offset-block-start"?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  "offset-inline-end"?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  "offset-inline-start"?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[];
  "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  order?: GlobalsNumber | GlobalsNumber[];
  orphans?: GlobalsNumber | GlobalsNumber[];
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[];
  "overflow-x"?: OverflowXProperty | OverflowXProperty[];
  "overflow-y"?: OverflowYProperty | OverflowYProperty[];
  "padding-block-end"?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  "padding-block-start"?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  "padding-inline-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  "padding-inline-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[];
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[];
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[];
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[];
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[];
  "text-align"?: TextAlignProperty | TextAlignProperty[];
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  "text-emphasis-position"?: GlobalsString | GlobalsString[];
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[];
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  "text-shadow"?: TextShadowProperty<TLength> | TextShadowProperty<TLength>[];
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  "text-transform"?: TextTransformProperty | TextTransformProperty[];
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  "touch-action"?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[];
  "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  "transition-delay"?: GlobalsString | GlobalsString[];
  "transition-duration"?: GlobalsString | GlobalsString[];
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  "user-select"?: UserSelectProperty | UserSelectProperty[];
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: GlobalsNumber | GlobalsNumber[];
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  "will-change"?: WillChangeProperty | WillChangeProperty[];
  "word-break"?: WordBreakProperty | WordBreakProperty[];
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  "word-wrap"?: WordWrapProperty | WordWrapProperty[];
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
  "z-index"?: ZIndexProperty | ZIndexProperty[];
}

export interface StandardShorthandPropertiesHyphenFallback<TLength = string | 0> {
  animation?: AnimationProperty | AnimationProperty[];
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  "border-block-end"?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  "border-block-start"?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  "border-color"?: BorderColorProperty | BorderColorProperty[];
  "border-image"?: BorderImageProperty | BorderImageProperty[];
  "border-inline-end"?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  "border-inline-start"?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  "border-style"?: BorderStyleProperty | BorderStyleProperty[];
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  "column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  "flex-flow"?: FlexFlowProperty | FlexFlowProperty[];
  font?: FontProperty | FontProperty[];
  grid?: GridProperty | GridProperty[];
  "grid-area"?: GlobalsString | GlobalsString[];
  "grid-column"?: GridColumnProperty | GridColumnProperty[];
  "grid-gap"?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  "grid-row"?: GridRowProperty | GridRowProperty[];
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[];
  "list-style"?: ListStyleProperty | ListStyleProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  "mask-border"?: MaskBorderProperty | MaskBorderProperty[];
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[];
  "text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[];
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesHyphenFallback<TLength = string | 0>
  extends StandardLonghandPropertiesHyphenFallback<TLength>,
    StandardShorthandPropertiesHyphenFallback<TLength> {}

export interface VendorLonghandPropertiesHyphenFallback<TLength = string | 0> {
  "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[];
  "-moz-binding"?: MozBindingProperty | MozBindingProperty[];
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  "-moz-force-broken-image-icon"?: GlobalsNumber | GlobalsNumber[];
  "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[];
  "-moz-orient"?: MozOrientProperty | MozOrientProperty[];
  "-moz-outline-radius-bottomleft"?: GlobalsString | GlobalsString[];
  "-moz-outline-radius-bottomright"?: GlobalsString | GlobalsString[];
  "-moz-outline-radius-topleft"?: GlobalsString | GlobalsString[];
  "-moz-outline-radius-topright"?: GlobalsString | GlobalsString[];
  "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[];
  "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[];
  "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[];
  "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[];
  "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[];
  "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[];
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  "-webkit-mask-image"?: GlobalsString | GlobalsString[];
  "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface VendorShorthandPropertiesHyphenFallback<TLength = string | 0> {
  "-moz-outline-radius"?: GlobalsString | GlobalsString[];
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  "-webkit-mask"?: GlobalsString | GlobalsString[];
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
}

export interface VendorPropertiesHyphenFallback<TLength = string | 0> extends VendorLonghandPropertiesHyphenFallback<TLength>, VendorShorthandPropertiesHyphenFallback<TLength> {}

export interface PropertiesHyphenFallback<TLength = string | 0> extends StandardPropertiesHyphenFallback<TLength>, VendorPropertiesHyphenFallback<TLength> {}

export interface CounterStyle {
  additiveSymbols?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  speakAs?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}

export interface CounterStyleHyphen {
  "additive-symbols"?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  "speak-as"?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}

export interface CounterStyleFallback {
  additiveSymbols?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}

export interface CounterStyleHyphenFallback {
  "additive-symbols"?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  "speak-as"?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}

export interface FontFace {
  fontDisplay?: FontFaceFontDisplayProperty;
  fontFamily?: string;
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontVariationSettings?: FontFaceFontVariationSettingsProperty;
  fontStretch?: FontFaceFontStretchProperty;
  fontStyle?: FontFaceFontStyleProperty;
  fontWeight?: FontFaceFontWeightProperty;
  fontVariant?: FontFaceFontVariantProperty;
  src?: string;
  unicodeRange?: string;
}

export interface FontFaceHyphen {
  "font-display"?: FontFaceFontDisplayProperty;
  "font-family"?: string;
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty;
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty;
  "font-stretch"?: FontFaceFontStretchProperty;
  "font-style"?: FontFaceFontStyleProperty;
  "font-weight"?: FontFaceFontWeightProperty;
  "font-variant"?: FontFaceFontVariantProperty;
  src?: string;
  "unicode-range"?: string;
}

export interface FontFaceFallback {
  fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  fontFamily?: string | string[];
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  fontVariationSettings?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  src?: string | string[];
  unicodeRange?: string | string[];
}

export interface FontFaceHyphenFallback {
  "font-display"?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  "font-family"?: string | string[];
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  "font-stretch"?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  "font-style"?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  "font-weight"?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  "font-variant"?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  src?: string | string[];
  "unicode-range"?: string | string[];
}

export interface Page<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}

export interface PageHyphen<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}

export interface PageFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}

export interface PageHyphenFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}

export interface Viewport<TLength = string | 0> {
  height?: ViewportHeightProperty<TLength>;
  maxHeight?: ViewportMaxHeightProperty<TLength>;
  maxWidth?: ViewportMaxWidthProperty<TLength>;
  maxZoom?: ViewportMaxZoomProperty;
  minHeight?: ViewportMinHeightProperty<TLength>;
  minWidth?: ViewportMinWidthProperty<TLength>;
  minZoom?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  userZoom?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportHyphen<TLength = string | 0> {
  height?: ViewportHeightProperty<TLength>;
  "max-height"?: ViewportMaxHeightProperty<TLength>;
  "max-width"?: ViewportMaxWidthProperty<TLength>;
  "max-zoom"?: ViewportMaxZoomProperty;
  "min-height"?: ViewportMinHeightProperty<TLength>;
  "min-width"?: ViewportMinWidthProperty<TLength>;
  "min-zoom"?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  "user-zoom"?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportFallback<TLength = string | 0> {
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  maxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  maxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  minHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  minWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}

export interface ViewportHyphenFallback<TLength = string | 0> {
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  "max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  "max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  "max-zoom"?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  "min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  "min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  "min-zoom"?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  "user-zoom"?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}

export type AtRules =
  | "@charset"
  | "@counter-style"
  | "@document"
  | "@font-face"
  | "@font-feature-values"
  | "@import"
  | "@keyframes"
  | "@media"
  | "@namespace"
  | "@page"
  | "@supports"
  | "@viewport";

export type AdvancedPseudos = ":-moz-any" | ":-webkit-any" | "::cue" | ":dir" | ":lang" | ":not" | ":nth-child" | ":nth-last-child" | ":nth-last-of-type" | ":nth-of-type";

export type SimplePseudos =
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-thumb"
  | "::-ms-track"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::placeholder"
  | "::selection"
  | "::spelling-error"
  | ":active"
  | ":after"
  | ":any-link"
  | ":before"
  | ":checked"
  | ":default"
  | ":defined"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-letter"
  | ":first-line"
  | ":first-of-type"
  | ":focus"
  | ":focus-within"
  | ":fullscreen"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited";

export type Pseudos = AdvancedPseudos | SimplePseudos;

type Globals = "inherit" | "initial" | "unset";

type GlobalsString = Globals | string;

type GlobalsNumber = Globals | number;

type AlignContentProperty = Globals | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | "stretch";

type AlignItemsProperty = Globals | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

type AlignSelfProperty = Globals | "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

type AnimationDirectionProperty = Globals | SingleAnimationDirection;

type AnimationFillModeProperty = Globals | SingleAnimationFillMode;

type AnimationIterationCountProperty = Globals | SingleAnimationIterationCount;

type AnimationNameProperty = Globals | "none" | string;

type AnimationPlayStateProperty = Globals | SingleAnimationPlayState;

type AnimationTimingFunctionProperty = Globals | SingleTimingFunction;

type AppearanceProperty = Globals | "auto" | "none";

type AzimuthProperty =
  | Globals
  | "behind"
  | "center"
  | "center-left"
  | "center-right"
  | "far-left"
  | "far-right"
  | "left"
  | "left-side"
  | "leftwards"
  | "right"
  | "right-side"
  | "rightwards"
  | string;

type BackdropFilterProperty = Globals | "none" | string;

type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

type BackgroundAttachmentProperty = Globals | Attachment;

type BackgroundBlendModeProperty = Globals | BlendMode;

type BackgroundClipProperty = Globals | Box;

type BackgroundColorProperty = Globals | Color;

type BackgroundImageProperty = Globals | BgImage;

type BackgroundOriginProperty = Globals | Box;

type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength>;

type BackgroundPositionXProperty<TLength> = Globals | LengthPercentage<TLength> | "center" | "left" | "right" | "x-end" | "x-start" | string;

type BackgroundPositionYProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

type BackgroundRepeatProperty = Globals | RepeatStyle;

type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength>;

type BlockSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type BorderBlockEndColorProperty = Globals | Color;

type BorderBlockEndStyleProperty = Globals | BrStyle;

type BorderBlockEndWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderBlockStartColorProperty = Globals | Color;

type BorderBlockStartStyleProperty = Globals | BrStyle;

type BorderBlockStartWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderBottomColorProperty = Globals | Color;

type BorderBottomLeftRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

type BorderBottomRightRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

type BorderBottomStyleProperty = Globals | BrStyle;

type BorderBottomWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderCollapseProperty = Globals | "collapse" | "separate";

type BorderImageOutsetProperty<TLength> = Globals | TLength | number;

type BorderImageRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch";

type BorderImageSliceProperty = Globals | NumberPercentage | "fill" | string;

type BorderImageSourceProperty = Globals | "none" | string;

type BorderImageWidthProperty<TLength> = Globals | LengthPercentage<TLength> | "auto" | number;

type BorderInlineEndColorProperty = Globals | Color;

type BorderInlineEndStyleProperty = Globals | BrStyle;

type BorderInlineEndWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderInlineStartColorProperty = Globals | Color;

type BorderInlineStartStyleProperty = Globals | BrStyle;

type BorderInlineStartWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderLeftColorProperty = Globals | Color;

type BorderLeftStyleProperty = Globals | BrStyle;

type BorderLeftWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderRightColorProperty = Globals | Color;

type BorderRightStyleProperty = Globals | BrStyle;

type BorderRightWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderSpacingProperty<TLength> = Globals | TLength | string;

type BorderTopColorProperty = Globals | Color;

type BorderTopLeftRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

type BorderTopRightRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

type BorderTopStyleProperty = Globals | BrStyle;

type BorderTopWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BottomProperty<TLength> = Globals | TLength | "auto" | string;

type BoxAlignProperty = Globals | "baseline" | "center" | "end" | "start" | "stretch";

type BoxDecorationBreakProperty = Globals | "clone" | "slice";

type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

type BoxLinesProperty = Globals | "multiple" | "single";

type BoxOrientProperty = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

type BoxShadowProperty<TLength> = Globals | Shadow<TLength> | "none";

type BoxSizingProperty = Globals | "border-box" | "content-box";

type BreakAfterProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakBeforeProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakInsideProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

type CaptionSideProperty = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

type CaretColorProperty = Globals | Color | "auto";

type ClearProperty = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

type ClipProperty = Globals | "auto" | string;

type ClipPathProperty = Globals | GeometryBox | "none" | string;

type ColorProperty = Globals | Color;

type ColumnCountProperty = Globals | "auto" | number;

type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

type ColumnGapProperty<TLength> = Globals | LengthPercentage<TLength> | "normal";

type ColumnRuleColorProperty = Globals | Color;

type ColumnRuleStyleProperty = Globals | BrStyle;

type ColumnRuleWidthProperty<TLength> = Globals | BrWidth<TLength>;

type ColumnSpanProperty = Globals | "all" | "none";

type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

type ContainProperty = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

type ContentProperty = Globals | ContentList | "none" | "normal" | string;

type CounterIncrementProperty = Globals | "none" | string;

type CounterResetProperty = Globals | "none" | string;

type CursorProperty =
  | Globals
  | "alias"
  | "all-scroll"
  | "auto"
  | "cell"
  | "col-resize"
  | "context-menu"
  | "copy"
  | "crosshair"
  | "default"
  | "e-resize"
  | "ew-resize"
  | "grab"
  | "grabbing"
  | "help"
  | "move"
  | "n-resize"
  | "ne-resize"
  | "nesw-resize"
  | "no-drop"
  | "none"
  | "not-allowed"
  | "ns-resize"
  | "nw-resize"
  | "nwse-resize"
  | "pointer"
  | "progress"
  | "row-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "text"
  | "vertical-text"
  | "w-resize"
  | "wait"
  | "zoom-in"
  | "zoom-out"
  | string;

type DirectionProperty = Globals | "ltr" | "rtl";

type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayListitem | DisplayInternal | DisplayBox | DisplayLegacy | string;

type DisplayInsideProperty = Globals | "auto" | "block" | "flex" | "grid" | "ruby" | "table";

type DisplayListProperty = Globals | "list-item" | "none";

type DisplayOutsideProperty =
  | Globals
  | "block-level"
  | "contents"
  | "inline-level"
  | "none"
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "run-in"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

type EmptyCellsProperty = Globals | "hide" | "show";

type FilterProperty = Globals | "none" | string;

type FlexBasisProperty<TLength> = Globals | TLength | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | string;

type FlexDirectionProperty = Globals | "column" | "column-reverse" | "row" | "row-reverse";

type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

type FloatProperty = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

type FontFamilyProperty = Globals | GenericFamily | string;

type FontFeatureSettingsProperty = Globals | "normal" | string;

type FontKerningProperty = Globals | "auto" | "none" | "normal";

type FontLanguageOverrideProperty = Globals | "normal" | string;

type FontVariationSettingsProperty = Globals | "normal" | string;

type FontSizeProperty<TLength> = Globals | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

type FontSizeAdjustProperty = Globals | "none" | number;

type FontStretchProperty =
  | Globals
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

type FontStyleProperty = Globals | "italic" | "normal" | "oblique";

type FontSynthesisProperty = Globals | "none" | "style" | "weight" | string;

type FontVariantProperty =
  | Globals
  | NumericFigureValues
  | EastAsianWidthValues
  | DiscretionaryLigValues
  | HistoricalLigValues
  | ContextualAltValues
  | CommonLigValues
  | EastAsianVariantValues
  | NumericSpacingValues
  | NumericFractionValues
  | "all-petite-caps"
  | "all-small-caps"
  | "historical-forms"
  | "none"
  | "normal"
  | "ordinal"
  | "petite-caps"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "titling-caps"
  | "unicase"
  | string;

type FontVariantAlternatesProperty = Globals | "historical-forms" | "normal" | string;

type FontVariantCapsProperty = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | EastAsianWidthValues | "normal" | "ruby" | string;

type FontVariantLigaturesProperty = Globals | CommonLigValues | DiscretionaryLigValues | HistoricalLigValues | ContextualAltValues | "none" | "normal" | string;

type FontVariantNumericProperty = Globals | NumericFigureValues | NumericSpacingValues | NumericFractionValues | "normal" | "ordinal" | "slashed-zero" | string;

type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

type FontWeightProperty = Globals | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type GridAutoColumnsProperty<TLength> = Globals | TrackSize<TLength>;

type GridAutoFlowProperty = Globals | "column" | "dense" | "row" | string;

type GridAutoRowsProperty<TLength> = Globals | TrackSize<TLength>;

type GridColumnEndProperty = Globals | GridLine;

type GridColumnGapProperty<TLength> = Globals | LengthPercentage<TLength>;

type GridColumnStartProperty = Globals | GridLine;

type GridRowEndProperty = Globals | GridLine;

type GridRowGapProperty<TLength> = Globals | LengthPercentage<TLength>;

type GridRowStartProperty = Globals | GridLine;

type GridTemplateAreasProperty = Globals | "none" | string;

type GridTemplateColumnsProperty<TLength> = Globals | TrackList<TLength> | "none" | string;

type GridTemplateRowsProperty<TLength> = Globals | TrackList<TLength> | "none" | string;

type HangingPunctuationProperty = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | string;

type HeightProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type HyphensProperty = Globals | "auto" | "manual" | "none";

type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

type ImageRenderingProperty = Globals | "auto" | "crisp-edges" | "pixelated";

type ImageResolutionProperty = Globals | "from-image" | string;

type ImeModeProperty = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

type InitialLetterProperty = Globals | "normal" | string | number;

type InitialLetterAlignProperty = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

type InlineSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type IsolationProperty = Globals | "auto" | "isolate";

type JustifyContentProperty = Globals | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";

type LeftProperty<TLength> = Globals | TLength | "auto" | string;

type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

type LineBreakProperty = Globals | "auto" | "loose" | "normal" | "strict";

type LineHeightProperty<TLength> = Globals | TLength | "normal" | string | number;

type LineHeightStepProperty<TLength> = Globals | TLength | "none";

type ListStyleImageProperty = Globals | "none" | string;

type ListStylePositionProperty = Globals | "inside" | "outside";

type ListStyleTypeProperty = Globals | "none" | string;

type MarginBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

type MarginBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

type MarginInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

type MarginInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

type MaskBorderModeProperty = Globals | "alpha" | "luminance";

type MaskBorderOutsetProperty<TLength> = Globals | TLength | number;

type MaskBorderRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch";

type MaskBorderSliceProperty = Globals | NumberPercentage | "fill" | string;

type MaskBorderSourceProperty = Globals | "none" | string;

type MaskBorderWidthProperty<TLength> = Globals | LengthPercentage<TLength> | "auto" | number;

type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

type MaskCompositeProperty = Globals | CompositingOperator;

type MaskImageProperty = Globals | MaskReference;

type MaskModeProperty = Globals | MaskingMode;

type MaskOriginProperty = Globals | GeometryBox;

type MaskPositionProperty<TLength> = Globals | Position<TLength>;

type MaskRepeatProperty = Globals | RepeatStyle;

type MaskSizeProperty<TLength> = Globals | BgSize<TLength>;

type MaskTypeProperty = Globals | "alpha" | "luminance";

type MaxBlockSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxHeightProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxInlineSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxWidthProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MinBlockSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinHeightProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinInlineSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinWidthProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MixBlendModeProperty = Globals | BlendMode;

type ObjectFitProperty = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

type OffsetAnchorProperty<TLength> = Globals | Position<TLength> | "auto";

type OffsetBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetDistanceProperty<TLength> = Globals | LengthPercentage<TLength>;

type OffsetPathProperty = Globals | GeometryBox | "none" | string;

type OffsetPositionProperty<TLength> = Globals | Position<TLength> | "auto";

type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

type OutlineColorProperty = Globals | Color | "invert";

type OutlineOffsetProperty<TLength> = Globals | TLength;

type OutlineStyleProperty = Globals | BrStyle | "auto";

type OutlineWidthProperty<TLength> = Globals | BrWidth<TLength>;

type OverflowProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

type OverflowWrapProperty = Globals | "break-word" | "normal";

type OverflowXProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

type OverflowYProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

type PaddingBlockEndProperty<TLength> = Globals | TLength | string;

type PaddingBlockStartProperty<TLength> = Globals | TLength | string;

type PaddingBottomProperty<TLength> = Globals | TLength | string;

type PaddingInlineEndProperty<TLength> = Globals | TLength | string;

type PaddingInlineStartProperty<TLength> = Globals | TLength | string;

type PaddingLeftProperty<TLength> = Globals | TLength | string;

type PaddingRightProperty<TLength> = Globals | TLength | string;

type PaddingTopProperty<TLength> = Globals | TLength | string;

type PageBreakAfterProperty = Globals | "always" | "auto" | "avoid" | "left" | "right";

type PageBreakBeforeProperty = Globals | "always" | "auto" | "avoid" | "left" | "right";

type PageBreakInsideProperty = Globals | "auto" | "avoid";

type PerspectiveProperty<TLength> = Globals | TLength | "none";

type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

type PointerEventsProperty = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

type PositionProperty = Globals | "absolute" | "fixed" | "relative" | "static" | "sticky";

type QuotesProperty = Globals | "none" | string;

type ResizeProperty = Globals | "both" | "horizontal" | "none" | "vertical";

type RightProperty<TLength> = Globals | TLength | "auto" | string;

type RubyAlignProperty = Globals | "center" | "space-around" | "space-between" | "start";

type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

type RubyPositionProperty = Globals | "inter-character" | "over" | "under";

type ScrollBehaviorProperty = Globals | "auto" | "smooth";

type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | "none";

type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;

type ScrollSnapPointsXProperty = Globals | "none" | string;

type ScrollSnapPointsYProperty = Globals | "none" | string;

type ScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

type ScrollSnapTypeXProperty = Globals | "mandatory" | "none" | "proximity";

type ScrollSnapTypeYProperty = Globals | "mandatory" | "none" | "proximity";

type ShapeMarginProperty<TLength> = Globals | LengthPercentage<TLength>;

type ShapeOutsideProperty = Globals | ShapeBox | "none" | string;

type TabSizeProperty<TLength> = Globals | TLength | number;

type TableLayoutProperty = Globals | "auto" | "fixed";

type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

type TextAlignLastProperty = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

type TextCombineUprightProperty = Globals | "all" | "digits" | "none" | string;

type TextDecorationColorProperty = Globals | Color;

type TextDecorationLineProperty = Globals | "blink" | "line-through" | "none" | "overline" | "underline" | string;

type TextDecorationSkipProperty = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

type TextDecorationSkipInkProperty = Globals | "auto" | "none";

type TextDecorationStyleProperty = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

type TextEmphasisColorProperty = Globals | Color;

type TextEmphasisStyleProperty = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

type TextIndentProperty<TLength> = Globals | LengthPercentage<TLength> | string;

type TextJustifyProperty = Globals | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientationProperty = Globals | "mixed" | "sideways" | "upright";

type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

type TextRenderingProperty = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

type TextShadowProperty<TLength> = Globals | ShadowT<TLength> | "none";

type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

type TextTransformProperty = Globals | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

type TextUnderlinePositionProperty = Globals | "auto" | "left" | "right" | "under" | string;

type TopProperty<TLength> = Globals | TLength | "auto" | string;

type TouchActionProperty = Globals | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | string;

type TransformProperty = Globals | "none" | string;

type TransformBoxProperty = Globals | "border-box" | "fill-box" | "view-box";

type TransformOriginProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

type TransformStyleProperty = Globals | "flat" | "preserve-3d";

type TransitionPropertyProperty = Globals | SingleTransitionProperty | "none";

type TransitionTimingFunctionProperty = Globals | SingleTransitionTimingFunction;

type UnicodeBidiProperty = Globals | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";

type UserSelectProperty = Globals | "all" | "auto" | "contain" | "none" | "text";

type VerticalAlignProperty<TLength> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

type WhiteSpaceProperty = Globals | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

type WidthProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type WillChangeProperty = Globals | AnimateableFeature | "auto";

type WordBreakProperty = Globals | "break-all" | "keep-all" | "normal";

type WordSpacingProperty<TLength> = Globals | LengthPercentage<TLength> | "normal";

type WordWrapProperty = Globals | "break-word" | "normal";

type WritingModeProperty = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

type ZIndexProperty = Globals | "auto" | number;

type AnimationProperty = Globals | SingleAnimation;

type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;

type BorderProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderColorProperty = Globals | Color;

type BorderImageProperty = Globals | NumberPercentage | "fill" | "none" | "repeat" | "round" | "space" | "stretch" | string;

type BorderInlineEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderInlineStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderLeftProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderRadiusProperty<TLength> = Globals | LengthPercentage<TLength> | string;

type BorderRightProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderStyleProperty = Globals | BrStyle;

type BorderTopProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderWidthProperty<TLength> = Globals | BrWidth<TLength>;

type ColumnRuleProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type ColumnsProperty<TLength> = Globals | TLength | "auto" | string | number;

type FlexProperty<TLength> = Globals | TLength | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | "none" | string | number;

type FlexFlowProperty = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | string;

type FontProperty = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

type GridProperty = Globals | "none" | string;

type GridColumnProperty = Globals | GridLine | string;

type GridGapProperty<TLength> = Globals | LengthPercentage<TLength> | string;

type GridRowProperty = Globals | GridLine | string;

type GridTemplateProperty = Globals | "none" | string;

type ListStyleProperty = Globals | "inside" | "none" | "outside" | string;

type MarginProperty<TLength> = Globals | TLength | "auto" | string;

type MaskProperty<TLength> = Globals | MaskLayer<TLength>;

type MaskBorderProperty = Globals | NumberPercentage | "alpha" | "fill" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | string;

type OffsetProperty<TLength> = Globals | Position<TLength> | GeometryBox | "auto" | "none" | string;

type OutlineProperty<TLength> = Globals | Color | BrStyle | BrWidth<TLength> | "auto" | "invert" | string;

type PaddingProperty<TLength> = Globals | TLength | string;

type TextDecorationProperty = Globals | Color | "blink" | "dashed" | "dotted" | "double" | "line-through" | "none" | "overline" | "solid" | "underline" | "wavy" | string;

type TextEmphasisProperty = Globals | Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

type TransitionProperty = Globals | SingleTransition;

type MsOverflowStyleProperty = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

type MozAppearanceProperty =
  | Globals
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communications-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-media-toolbox"
  | "-moz-win-mediatext"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "none"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scale-vertical"
  | "scalethumb-horizontal"
  | "scalethumb-vertical"
  | "scalethumbend"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "scrollbarbutton-up"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "tabpanel"
  | "tabpanels"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview";

type MozBindingProperty = Globals | "none" | string;

type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

type MozBorderRightColorsProperty = Globals | Color | "none" | string;

type MozBorderTopColorsProperty = Globals | Color | "none" | string;

type MozContextPropertiesProperty = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

type MozFloatEdgeProperty = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozImageRegionProperty = Globals | "auto" | string;

type MozOrientProperty = Globals | "block" | "horizontal" | "inline" | "vertical";

type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

type MozTextBlinkProperty = Globals | "blink" | "none";

type MozUserFocusProperty = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

type MozUserInputProperty = Globals | "auto" | "disabled" | "enabled" | "none";

type MozUserModifyProperty = Globals | "read-only" | "read-write" | "write-only";

type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

type MozWindowShadowProperty = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

type WebkitBorderBeforeColorProperty = Globals | Color;

type WebkitBorderBeforeStyleProperty = Globals | BrStyle;

type WebkitBorderBeforeWidthProperty<TLength> = Globals | BrWidth<TLength>;

type WebkitBoxReflectProperty<TLength> = Globals | TLength | "above" | "below" | "left" | "right" | string;

type WebkitMaskAttachmentProperty = Globals | Attachment | string;

type WebkitMaskClipProperty = Globals | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

type WebkitMaskOriginProperty = Globals | "border" | "content" | "padding" | string;

type WebkitMaskPositionProperty<TLength> = Globals | MaskPosition<TLength>;

type WebkitMaskPositionXProperty<TLength> = Globals | LengthPercentage<TLength> | "center" | "left" | "right" | string;

type WebkitMaskPositionYProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "top" | string;

type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

type WebkitMaskRepeatXProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

type WebkitMaskRepeatYProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

type WebkitTapHighlightColorProperty = Globals | Color;

type WebkitTextFillColorProperty = Globals | Color;

type WebkitTextStrokeColorProperty = Globals | Color;

type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

type WebkitTouchCalloutProperty = Globals | "default" | "none";

type WebkitBorderBeforeProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;

type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

type CounterStyleSpeakAsProperty = "auto" | "bullets" | "numbers" | "spell-out" | "words" | string;

type CounterStyleSystemProperty = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | string;

type FontFaceFontDisplayProperty = "auto" | "block" | "fallback" | "optional" | "swap";

type FontFaceFontFeatureSettingsProperty = "normal" | string;

type FontFaceFontVariationSettingsProperty = "normal";

type FontFaceFontStretchProperty =
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

type FontFaceFontStyleProperty = "italic" | "normal" | "oblique";

type FontFaceFontWeightProperty = "bold" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type FontFaceFontVariantProperty =
  | NumericFigureValues
  | EastAsianWidthValues
  | DiscretionaryLigValues
  | HistoricalLigValues
  | ContextualAltValues
  | CommonLigValues
  | EastAsianVariantValues
  | NumericSpacingValues
  | NumericFractionValues
  | "all-petite-caps"
  | "all-small-caps"
  | "historical-forms"
  | "none"
  | "normal"
  | "ordinal"
  | "petite-caps"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "titling-caps"
  | "unicase"
  | string;

type PageBleedProperty<TLength> = TLength | "auto";

type PageMarksProperty = "crop" | "cross" | "none" | string;

type ViewportHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxZoomProperty = "auto" | string | number;

type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMinZoomProperty = "auto" | string | number;

type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

type ViewportUserZoomProperty = "fixed" | "zoom";

type ViewportWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportZoomProperty = "auto" | string | number;

type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

type SingleAnimationIterationCount = "infinite" | number;

type SingleAnimationPlayState = "paused" | "running";

type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear" | string;

type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | string;

type StepTimingFunction = "step-end" | "step-start" | string;

type Attachment = "fixed" | "local" | "scroll";

type BlendMode =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "darken"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "luminosity"
  | "multiply"
  | "normal"
  | "overlay"
  | "saturation"
  | "screen"
  | "soft-light";

type Box = "border-box" | "content-box" | "padding-box";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type NamedColor =
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "transparent"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type DeprecatedSystemColor =
  | "ActiveBorder"
  | "ActiveCaption"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "InactiveCaptionText"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

type BgImage = "none" | string;

type BgPosition<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

type LengthPercentage<TLength> = TLength | string;

type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";

type BgSize<TLength> = LengthPercentage<TLength> | "auto" | "contain" | "cover";

type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

type NumberPercentage = string | number;

type Shadow<TLength> = Color | TLength | "inset" | string;

type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

type ShapeBox = Box | "margin-box";

type ContentList = Quote | "contents" | string;

type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

type DisplayOutside = "block" | "inline" | "run-in";

type DisplayInside = "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

type DisplayListitem = "list-item" | string;

type DisplayInternal =
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

type DisplayBox = "contents" | "none";

type DisplayLegacy = "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small";

type RelativeSize = "larger" | "smaller";

type CommonLigValues = "common-ligatures" | "no-common-ligatures";

type DiscretionaryLigValues = "discretionary-ligatures" | "no-discretionary-ligatures";

type HistoricalLigValues = "historical-ligatures" | "no-historical-ligatures";

type ContextualAltValues = "contextual" | "no-contextual";

type NumericFigureValues = "lining-nums" | "oldstyle-nums";

type NumericSpacingValues = "proportional-nums" | "tabular-nums";

type NumericFractionValues = "diagonal-fractions" | "stacked-fractions";

type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

type EastAsianWidthValues = "full-width" | "proportional-width";

type TrackSize<TLength> = TrackBreadth<TLength> | string;

type TrackBreadth<TLength> = LengthPercentage<TLength> | "auto" | "max-content" | "min-content" | string;

type GridLine = "auto" | string | number;

type TrackList<TLength> = TrackSize<TLength> | string;

type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

type MaskReference = "none" | string;

type MaskingMode = "alpha" | "luminance" | "match-source";

type Position<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

type ShadowT<TLength> = Color | TLength | string;

type SingleTransitionProperty = "all" | string;

type SingleTransitionTimingFunction = SingleTimingFunction;

type AnimateableFeature = "contents" | "scroll-position" | string;

type SingleAnimation = SingleTimingFunction | SingleAnimationIterationCount | SingleAnimationDirection | SingleAnimationFillMode | SingleAnimationPlayState | "none" | string;

type FinalBgLayer<TLength> = Color | BgImage | BgPosition<TLength> | RepeatStyle | Attachment | Box | string;

type MaskLayer<TLength> = MaskReference | Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | string;

type SingleTransition = SingleTransitionProperty | SingleTransitionTimingFunction | "none" | string;

type CompositeStyle =
  | "clear"
  | "copy"
  | "destination-atop"
  | "destination-in"
  | "destination-out"
  | "destination-over"
  | "source-atop"
  | "source-in"
  | "source-out"
  | "source-over"
  | "xor";

type MaskPosition<TLength> = LengthPercentage<TLength> | "center" | "left" | "right" | string;

type ViewportLength<TLength> = LengthPercentage<TLength> | "auto";
