import React, { useEffect, useRef, useState } from "react";
import { set } from "d3-collection";
import { scaleOrdinal, scalePoint } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import { ChartCanvas, Chart } from "react-stockcharts";
import { StackedBarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";

const AssetsAllocation = () => {
    const width = 600; // Default width
    const ratio = 1;   // Default ratio

    const sampleData = [
        { x: "Apples", y1: 40, y2: 30, y3: 20, y4: 10, region: "North" },
        { x: "Oranges", y1: 50, y2: 40, y3: 30, y4: 20, region: "East" },
        { x: "Bananas", y1: 60, y2: 50, y3: 40, y4: 30, region: "South" },
        { x: "Grapes", y1: 70, y2: 60, y3: 50, y4: 40, region: "West" },
    ];

    const chartContainerRef = useRef(null); // Create a ref for the chart container

    const regions = sampleData.map(d => d.region);
    const uniqueRegions = Array.from(new Set(regions));

    const f = scaleOrdinal(schemeCategory10).domain(uniqueRegions);
    const fill = (d, i) => f(i);

    return (
        <div ref={chartContainerRef}> {/* Attach ref to the container */}
            {chartContainerRef.current ? ( // Check if the ref is defined
                <ChartCanvas
                    ratio={ratio}
                    width={width}
                    height={400}
                    margin={{ left: 40, right: 10, top: 20, bottom: 30 }}
                    type={"svg"}
                    seriesName="Fruits"
                    xExtents={sampleData.map(d => d.x)}
                    data={sampleData}
                    xAccessor={d => d.x}
                    xScale={scalePoint()}
                    padding={1}
                >
                    <Chart id={1} yExtents={[0, d => d.y1 + d.y2 + d.y3 + d.y4]}>
                        <XAxis axisAt="bottom" orient="bottom" />
                        <YAxis axisAt="left" orient="left" />
                        <StackedBarSeries
                            yAccessor={[d => d.y1, d => d.y2, d => d.y3, d => d.y4]}
                            fill={fill}
                        />
                    </Chart>
                </ChartCanvas>
            ) : (
                <div>Loading chart...</div> // Optional loading state
            )}
        </div>
    );
};

export default fitWidth(AssetsAllocation);
