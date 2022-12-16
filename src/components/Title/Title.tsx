import React from 'react';
import './Title.scss';

export const Title = () => {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        className="filterwrapper"
      >
        <defs>
          <svg
            id="glitchmask-r"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line className="top-r" x1={0} y1={0} x2="100%" y2={0}>
              {' '}
            </line>
            <line className="bot-r" x1={0} y1="100%" x2="100%" y2="100%" />
          </svg>
          <svg
            id="glitchmask-g"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line className="top-g" x1={0} y1={0} x2="100%" y2={0} />
            <line className="bot-g" x1={0} y1="100%" x2="100%" y2="100%" />
          </svg>
          <filter
            colorInterpolationFilters="sRGB"
            id="filter"
            width="100%"
            height="100%"
            x={0}
            y={0}
          >
            <feFlood floodColor="black" result="black" />
            {/* red text start */}
            <feFlood floodColor="red" result="REDTXT_FLOOD_10" />
            <feComposite
              operator="in"
              in="REDTXT_FLOOD_10"
              in2="SourceAlpha"
              result="REDTXT_COMP_20"
            />
            <feOffset in="SourceGraphic" dx={-2} dy={0} result="REDTXT_OFFSET_30" />
            <feMerge result="REDTXT_MERGE_40">
              <feMergeNode in="black" />
              <feMergeNode in="REDTXT_COMP_20" />
              <feMergeNode in="REDTXT_OFFSET_30" />
            </feMerge>
            <feImage
              preserveAspectRatio="none"
              id="mask-r"
              result="REDTXT_IMG_50"
              xlinkHref="#glitchmask-r"
            />
            <feComposite
              in2="REDTXT_IMG_50"
              in="REDTXT_MERGE_40"
              operator="out"
              result="REDTXT_COMP_60"
            />
            {/* red text end */}
            {/* green text start */}
            <feFlood floodColor="limegreen" result="GREENTXT_FLOOD_10" />
            <feComposite
              operator="in"
              in="GREENTXT_FLOOD_10"
              in2="SourceAlpha"
              result="GREENTXT_COMP_20"
            />
            <feOffset
              in="SourceGraphic"
              dx={2}
              dy={0}
              result="GREENTXT_OFFSET_30"
            />
            <feMerge result="GREENTXT_MERGE_40">
              <feMergeNode in="black" />
              <feMergeNode in="GREENTXT_COMP_20" />
              <feMergeNode in="GREENTXT_OFFSET_30" />
            </feMerge>
            <feImage
              preserveAspectRatio="none"
              id="mask-g"
              result="GREENTXT_IMG_50"
              xlinkHref="#glitchmask-g"
            />
            <feComposite
              in2="GREENTXT_IMG_50"
              in="GREENTXT_MERGE_40"
              operator="out"
              result="GREENTXT_COMP_60"
            />
            {/* green text end */}
            <feMerge result="MERGE_10">
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="REDTXT_COMP_60" />
              <feMergeNode in="GREENTXT_COMP_60" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <p className="intro">
        A cross-browser rework of the popular{' '}
        <a href="https://css-tricks.com/glitch-effect-text-images-svg/">"Glitch"</a>{' '}
        effect with a CSS animated SVG Filter. It is self-contained and works
        without duplicating text in pseudo elements. No Javascript needed, except a
        Firefox bugfix. Create all kinds of variants by playing with CSS and filter
        values.
      </p>
      <hr />
      <figure className="glitch-filter-example">
        <figcaption className="glitch-filter-example__heading">
          SVG "Glitch" filter applied to text inside an SVG
        </figcaption>
        <svg
          className="glitch-filter-example__demo"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
        >
          <text
            className="glitch-filter-example__filtered-text"
            y="50%"
            textAnchor="middle"
            x="50%"
            transform="translate(0 34)"
          >
            SVG text
          </text>
        </svg>
      </figure>
      <hr />
      <figure className="glitch-filter-example">
        <figcaption className="glitch-filter-example__heading">
          SVG "Glitch" filter applied to HTML text (doesn't work in Safari and
          IE/Edge)
        </figcaption>
        <p className="glitch-filter-example__filtered-text">HTML text</p>
      </figure>
    </>
  );
};
