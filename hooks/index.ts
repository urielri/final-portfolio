
import {theme as themeAtom, displayTheme as displayThemeAtom} from '@/atoms'
import {useRecoilValue, useSetRecoilState} from 'recoil'
export const useTheme = () => {
    const update = useSetRecoilState(themeAtom);
    const display = useRecoilValue(displayThemeAtom);
    const state = = useRecoilValue(themeAtom)
    return {update, display, state,  }
}