// v4 - ?? lines
const getFirstStep = (fromOnboardingFlow, recommendedTier) => {
  const directCompanyFirstStepLogic = () => {
    return (recommendedTier === COMPLETE || recommendedTier === CONCIERGE || recommendedTier === CORE)
      ? TIER_RECOMMENDATION
      : SELECT_TIER
  }

  const partnerAccountantCompanyFirstStepLogic = () => {
    return (recommendedTier === COMPLETE || recommendedTier === CONCIERGE)
      ? TIER_HIGHLIGHT
      : SELECT_TIER
  }

  return fromOnboardingFlow
    ? directCompanyFirstStepLogic()
    : partnerAccountantCompanyFirstStepLogic()
};

// // v3 - 17 lines
// const directCompanyFirstStepLogic = (recommendedTier) => {
//   return [COMPLETE, CONCIERGE, CORE].includes(recommendedTier)
//     ? TIER_RECOMMENDATION
//     : SELECT_TIER
// }

// const partnerAccountantCompanyFirstStepLogic = (recommendedTier) => {
//   return [COMPLETE, CONCIERGE].includes(recommendedTier)
//     ? TIER_HIGHLIGHT
//     : SELECT_TIER
// }

// const getFirstStep = (fromOnboardingFlow, recommendedTier) => {
//   return fromOnboardingFlow
//     ? directCompanyFirstStepLogic(recommendedTier)
//     : partnerAccountantCompanyFirstStepLogic(recommendedTier)
// };

// // v2 - 20 lines
// const directCompanyFirstStepLogic = (recommendedTier) => {
//   if (recommendedTier === SELECT) {
//     return SELECT_TIER
//   } else {
//     return TIER_RECOMMENDATION
//   }
// }

// const partnerAccountantCompanyFirstStepLogic = (recommendedTier) => {
//   if ([CORE, SELECT].includes(recommendedTier)) {
//     return SELECT_TIER
//   } else {
//     return TIER_HIGHLIGHT
//   }
// }

// const getFirstStep = (fromOnboardingFlow, recommendedTier) => {
//   return fromOnboardingFlow
//     ? directCompanyFirstStepLogic(recommendedTier)
//     : partnerAccountantCompanyFirstStepLogic(recommendedTier)
// };

// // v1 = 13 lines
// const getFirstStep = (fromOnboardingFlow, recommendedTier) => {
//   if (fromOnboardingFlow) {
//     if (recommendedTier === SELECT) {
//       return SELECT_TIER
//     } else {
//       return TIER_RECOMMENDATION
//     }
//   }
//   if ([CORE, SELECT].includes(recommendedTier)) {
//     return SELECT_TIER
//   } else {
//     return TIER_HIGHLIGHT
//   }
// };