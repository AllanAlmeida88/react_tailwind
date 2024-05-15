import MenuGrupo from '@/components/Template/MenuGrupo'
import MenuItem from '@/components/Template/MenuItem'

import { IconArticle, IconBoxAlignTopLeft, IconBoxMargin, IconBoxModel, IconBoxPadding, IconComponents, IconContainer, IconDeviceTv, IconDevices, IconGlass, IconGrid3x3, IconLayout, IconLayoutGrid, IconSchool, IconSpace, IconSquare } from '@tabler/icons-react';
interface MenuProps {
    className?: string
}
export default function Menu(props: MenuProps) {
    return (
        <div className={`${props.className ?? ''}`}>
            <MenuGrupo grupo='Conceitos'>
                <MenuItem href='/conceitos/classes'            label='Classes'         icon={<IconSchool />} />
                <MenuItem href='/conceitos/componentes'        label='Compenentes'     icon={<IconComponents />} />
                <MenuItem href='/conceitos/mobile'             label='Mobile'          icon={<IconDevices />} />
                <MenuItem href='/conceitos/pseudo'             label='Pseudo Classe'   icon={<IconGlass />} />
            </MenuGrupo>
            <MenuGrupo grupo='Box Model'>
                <MenuItem href='/box-model/boxsizing'          label='Box sizing'      icon={<IconBoxModel />}/>
                <MenuItem href='/box-model/margin'             label='Box margin'      icon={<IconBoxMargin />}/>
                <MenuItem href='/box-model/padding'            label='Box padding'     icon={<IconBoxPadding/>}/>
                <MenuItem href='/box-model/size'               label='Box size'        icon={<IconSquare/>}/>
                <MenuItem href='/box-model/space'              label='Box space'       icon={<IconSpace />}/>
            </MenuGrupo>
            <MenuGrupo grupo='Flex'>
                <MenuItem href='/flex/inicial'            label='Flex sizing 1'   icon={<IconDeviceTv />} />
                <MenuItem href='/flex/redimensionamento'  label='Flex sizing 2'   icon={<IconDeviceTv />} />
            </MenuGrupo>
            <MenuGrupo grupo='Grid'>
                <MenuItem href='/grid/inicial'            label='Grid cols'       icon={<IconGrid3x3 />} />
                <MenuItem href='/grid/layout'            label='Grid layout'     icon={<IconLayoutGrid />} />
                <MenuItem href='/grid/posicao'            label='Grid position'   icon={<IconBoxAlignTopLeft />} />
            </MenuGrupo>
            <MenuGrupo grupo='Extras'>
                <MenuItem href='/extras/container'          label='Container'       icon={<IconContainer />} />
                <MenuItem href='/extras/titulo'             label='Title'           icon={<IconArticle />} />
            </MenuGrupo>
        </div>
    )
}