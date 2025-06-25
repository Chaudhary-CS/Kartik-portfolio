import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiElectron,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiSqlalchemy,
  SiSelenium,
  SiPostgresql,
  SiVercel,
  SiDocker,
  SiFirebase,
  SiVite,
  SiLinux,
  SiTableau,
  SiPlotly,
  SiOpencv,
  SiScikitlearn,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiGoogle,
  SiAxios,
  SiRadixui,
  SiLucide,
  SiSocketdotio,
  SiAdobeacrobatreader,
} from 'react-icons/si'
import { FaYahoo } from 'react-icons/fa'
import { FcScatterPlot } from 'react-icons/fc'
import { BiSolidDashboard } from 'react-icons/bi'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { BsRouterFill } from 'react-icons/bs'
import { IoBookOutline, IoBusiness } from 'react-icons/io5'
import { TbNeedleThread, TbLayoutNavbar } from 'react-icons/tb'
import { ComponentType } from 'react'
import React from 'react'
import ConvexIcon from './ConvexIcon'
import CarlaIcon from './CarlaIcon'

// Static import Simple Icons
const iconComponents: Record<string, ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiElectron,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiSqlalchemy,
  SiSelenium,
  SiPostgresql,
  SiVercel,
  SiDocker,
  SiFirebase,
  SiVite,
  SiLinux,
  SiTableau,
  SiPlotly,
  SiOpencv,
  SiScikitlearn,
  SiOpenai,
  SiPandas,
  SiNumpy,
  FaYahoo,
  SiGoogle,
  SiAxios,
  SiRadixui,
  SiLucide,
  SiSocketdotio,
  SiAdobeacrobatreader,
  BiSolidDashboard,
  PiMicrosoftExcelLogoFill,
  BsRouterFill,
  FcScatterPlot,
  IoBusiness,
  TbNeedleThread,
  TbLayoutNavbar,
  ConvexIcon,
  CarlaIcon,
  IoBookOutline,
}

interface SkillIconProps {
  iconName?: string
  color?: string
  size?: number
  className?: string
}

export default function SkillIcon({ iconName, color, size = 16, className = '' }: SkillIconProps) {
  if (!iconName || !iconComponents[iconName]) {
    // Fallback to a colored dot if no icon is available
    return (
      <div 
        className={`rounded-full border-2 border-white flex-shrink-0 ${className}`}
        style={{ 
          backgroundColor: color || '#6b7280',
          width: size,
          height: size
        }}
      />
    )
  }

  const IconComponent = iconComponents[iconName]
  
  // Ensure dark icons are visible by adding a filter or using white color
  const iconColor = color === '#ffffff' || color === '#000000' ? '#ffffff' : (color || '#6b7280')
  
  return (
    <IconComponent 
      size={size}
      style={{ 
        color: iconColor,
        filter: iconColor === '#ffffff' ? 'drop-shadow(0 0 2px rgba(0,0,0,0.8))' : 'none'
      }}
      className={`flex-shrink-0 ${className}`}
    />
  )
} 