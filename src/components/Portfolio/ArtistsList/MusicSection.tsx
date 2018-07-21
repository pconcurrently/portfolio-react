import * as React from 'react';
import { connect } from 'react-redux';

import { Progress, Button, Row } from 'reactstrap';
import { getArtists, getMostRecent } from '../../../redux/lastfm.redux';

interface MusicSectionProps {
    getArtistsPending: boolean;
    getRecentPending: boolean;
    artistsList: any[];
    recentTrack: any;
    recentArtist: any;
    dispatch?: any;
}

interface MusicSectionState {
    artistsPaging: number;
}

class MusicSection extends React.Component<MusicSectionProps, MusicSectionState> {
    constructor(props: any) {
        super(props);
        this.state = {
            artistsPaging: 20
        }

        this.switchPaging = this.switchPaging.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getArtists());
        this.props.dispatch(getMostRecent());
    }

    switchPaging() {
        this.setState({
            artistsPaging: this.state.artistsPaging === 20 ? this.props.artistsList.length : 20
        })
    }

    render() {
        const { artistsList, getArtistsPending, getRecentPending, recentArtist, recentTrack } = this.props;
        const highestCount = artistsList && artistsList.length ? artistsList[0].playcount : 1;
        return (
            <div>
                <h4>Before you get to know me, be acquainted with my music first</h4>
                <h5 className="mt-2">Most recent track</h5>
                {getRecentPending ? (
                    <div className="lds-ripple"><div></div><div></div></div>
                ) : (
                    <div className="recent-track-info">
                        <div className="img-wrapper">
                            <img className="artist-img" src={recentArtist.image[1]['#text']} alt={recentArtist.name} />
                        </div>
                        <div className="track-info">
                            {`${recentArtist.name} - ${recentTrack.name}`}
                        </div>
                            {recentTrack && recentTrack['@attr'] && recentTrack['@attr']['nowplaying'] === 'true' ? (
                                <div className="now-playing ">
                                    <div className="svg-wrapper">
                                        <div className="svg-loader bars">
                                    </div>
                                    </div>
                                    <span className="now-playing-status">Now playing...</span>
                                </div>
                            ) : undefined}
                    </div>
                )}
                <h5 className="mt-4">List 50 of my all-time favorites (based on <a href="https://www.last.fm/user/ShortGiraffe4/">last.fm</a>)</h5>
                {getArtistsPending ? (
                    <div className="lds-ripple"><div></div><div></div></div>
                ):(
                    <div>
                        <small><i>(*Number of plays)</i></small>
                        <Row>
                            {artistsList && artistsList.length ? artistsList.slice(0, this.state.artistsPaging).map((artist, index) => (
                                <div className="artist-info" key={index}>
                                    <img className={`artist-img ${[0,1].indexOf(index) !== -1 ? 'top-2' : ''}`} src={artist.image[1]['#text']} alt={artist.name} />
                                    <div className="artist-name">
                                        {artist.name}
                                    </div>
                                    <div className="artist-playcount">
                                        <Progress animated bar value={artist.playcount / highestCount * 100}>{artist.playcount}</Progress>
                                    </div>
                                </div>
                            )) : undefined}
                        </Row>
                        <Button color="link" className="float-right" onClick={this.switchPaging}>{this.state.artistsPaging === 20 ? 'View all >>' : '<< View less'}</Button>
                    </div> 
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    artistsList: state.lastfm.artistsList,
    getArtistsPending: state.lastfm.getArtistsPending,
    recentTrack: state.lastfm.recentTrack,
    recentArtist: state.lastfm.recentArtist,
    getRecentPending: state.lastfm.getRecentPending
});

export default connect(mapStateToProps)(MusicSection);
