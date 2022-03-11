import React from 'react'

import HeadingImageCTA from "../slices/HeadingImageCTA";
import Featured from '../slices/Featured';
import CenteredSubheading from '../slices/CenteredSubheading';
import Subheading from '../slices/Subheading';
import CenteredText from '../slices/CenteredText';
import CTAButtons from '../slices/CTAButtons';
import ImageStats from '../slices/ImageStats';
import ImageText from '../slices/ImageText';
import Articles from '../slices/Articles';
import LargeHeading from '../slices/LargeHeading';
import PastPresentations from '../slices/PastPresentations';
import Testimonials from '../slices/Testimonials';
import Business from '../slices/Business';
import HorizontalGallery from '../slices/HorizontalGallery';
import DescriptionStats from '../slices/DescriptionStats';
import Cta from '../slices/Cta';
import Timeline from '../slices/Timeline';

const SliceZone = props => {
    return props.slices.map(slice => {
        switch (slice.slice_type) {
            case "heading_image_cta":
                return (
                    <HeadingImageCTA key={slice.id} data={slice.primary} />
                )
            case "featured":
                return <Featured key={slice.id} data={slice} />
            case "centred_subheading":
                return <CenteredSubheading key={slice.id} data={slice} />
            case "subheading":
                return <Subheading key={slice.id} data={slice} />
            case "centered_text":
                return <CenteredText key={slice.id} data={slice} />
            case "cta_buttons":
                return <CTAButtons key={slice.id} data={slice} />
            case "image_stats":
                return <ImageStats key={slice.id} data={slice} />
            case "image_text":
                return <ImageText key={slice.id} data={slice} />
            case "articles":
                return <Articles key={slice.id} data={slice} />
            case "large_heading":
                return <LargeHeading key={slice.id} data={slice} />
            case "past_presentations":
                return <PastPresentations key={slice.id} data={slice} />
            case "past_presentations_link":
                return <PastPresentations 
                    key={slice.id} 
                    data={{items: slice.primary.past_presentations.document.data.body[0].items}} 
                />
            case "testimonials":
                return <Testimonials key={slice.id} data={{items: slice.primary.testimonials_link.document.data.body[0].items}} />
            case "business":
                return <Business key={slice.id} data={slice} />
            case "horizontal_gallery":
                return <HorizontalGallery key={slice.id} data={slice} />
            case "description_stats":
                return <DescriptionStats key={slice.id} data={slice} />
            case "cta":
                return <Cta key={slice.id} data={slice} />
            case "timeline":
                return <Timeline key={slice.id} data={slice} />
            default:
                return (
                    <p>{`Unsupported slice of type ${slice.slice_type}`}</p>
                )
        }
    })
}

export default SliceZone