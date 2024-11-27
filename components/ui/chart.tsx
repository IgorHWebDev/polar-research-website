'use client';

import * as React from 'react';
import {
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  type AreaProps,
  type BarProps,
  type LineProps,
  type XAxisProps,
  type YAxisProps,
  type LegendProps,
  type TooltipProps
} from "recharts"

import { cn } from '@/lib/utils';

const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
Chart.displayName = "Chart"

const ChartArea = React.forwardRef<SVGElement, AreaProps>((props, ref) => (
  <Area ref={ref as any} {...props} />
))
ChartArea.displayName = "ChartArea"

const ChartBar = React.forwardRef<SVGPathElement, BarProps>((props, ref) => (
  <Bar ref={ref as any} {...props} />
))
ChartBar.displayName = "ChartBar"

const ChartLine = React.forwardRef<SVGPathElement, LineProps>((props, ref) => (
  <Line ref={ref as any} {...props} />
))
ChartLine.displayName = "ChartLine"

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  Omit<LegendProps, "iconType">
>((props, ref) => <Legend ref={ref as any} {...props} />)
ChartLegend.displayName = "ChartLegend"

const ChartXAxis = React.forwardRef<SVGElement, XAxisProps>((props, ref) => (
  <XAxis ref={ref as any} {...props} />
))
ChartXAxis.displayName = "ChartXAxis"

const ChartYAxis = React.forwardRef<SVGElement, YAxisProps>((props, ref) => (
  <YAxis ref={ref as any} {...props} />
))
ChartYAxis.displayName = "ChartYAxis"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  Omit<TooltipProps<any, any>, "active">
>((props, ref) => <Tooltip ref={ref as any} {...props} />)
ChartTooltip.displayName = "ChartTooltip"

export {
  Chart,
  ChartArea,
  ChartBar,
  ChartLine,
  ChartLegend,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
}
