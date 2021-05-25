import React from 'react'
import ProbTypes from 'prop-types'

const YoutubeEmbed = ({ embedId }) => (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
)

YoutubeEmbed.ProbTypes = {
    embedId: ProbTypes.string.isRequired
}

export default YoutubeEmbed