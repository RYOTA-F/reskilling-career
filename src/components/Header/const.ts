/* Const */
import { META_DATA } from '@/const/meta.const'
import { COLOR } from '@/const/color.const'

export const HEADER = {
  HEIGHT: {
    PC: 72,
    SP: 48,
  },
  CATCH_PHRASE: META_DATA.DESCRIPTION,
  ICON: {
    COLOR: COLOR.GRAY_SCALE.WHITE,
    HEIGHT: 14,
    WIDTH: 14,
  },
} as const
