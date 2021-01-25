import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Header, {
  HeaderButtonLink,
  HeaderDropdown,
  HeaderFeature,
  HeaderFeatureCallOut,
  HeaderFrame,
  HeaderGroup,
  HeaderLogo,
  HeaderPicture,
  HeaderPlayButton,
  HeaderProfile,
  HeaderSearch,
  HeaderText,
  HeaderTextLink,
} from "../Components/Header/Header";
import Logo from "../logo.svg";
import Loading, { LoadingReleaseBody } from "../Components/Loading/Loading";
import { useStateValue } from "../ContextApi/StateProvider";
import SelectProfileContainer from "./ProfileContainer";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import Card, {
  CardEntities,
  CardFeature,
  CardGroup,
  CardImage,
  CardItem,
  CardMeta,
  CardSubTitle,
  CardText,
  CardTitle,
} from "../Components/Card/Card";
import Player, { PlayerButton, PlayerVideo } from "../Components/Player/Player";

const BrowseContainer = ({ slides }) => {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 1 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return (
    <>
      {user ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <LoadingReleaseBody />}
          <Header src="joker1">
            <HeaderFrame>
              <HeaderGroup>
                <HeaderLogo to="/" src={Logo} alt="Netflix" />
                <HeaderTextLink
                  active={category === "series" ? "true" : "false"}
                  onClick={() => setCategory("series")}
                >
                  Series
                </HeaderTextLink>
                <HeaderTextLink
                  active={category === "films" ? "true" : "false"}
                  onClick={() => setCategory("films")}
                >
                  Films
                </HeaderTextLink>
              </HeaderGroup>
              <HeaderGroup>
                <HeaderSearch
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <HeaderProfile>
                  <HeaderPicture src={user.photoURL} />
                  <HeaderDropdown>
                    <HeaderGroup>
                      <HeaderPicture src={user.photoURL} />
                      <HeaderTextLink>{user.displayName}</HeaderTextLink>
                    </HeaderGroup>
                    <HeaderGroup>
                      <HeaderTextLink
                        onClick={() =>
                          auth.signOut().then(() => history.push("/"))
                        }
                      >
                        Sign out
                      </HeaderTextLink>
                    </HeaderGroup>
                  </HeaderDropdown>
                </HeaderProfile>
              </HeaderGroup>
            </HeaderFrame>
            <HeaderFeature>
              <HeaderFeatureCallOut>Watch Joker Now</HeaderFeatureCallOut>

              <HeaderText>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </HeaderText>
              <HeaderPlayButton>Play</HeaderPlayButton>
            </HeaderFeature>
          </Header>
          <CardGroup>
            {slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <CardTitle>{slideItem.title}</CardTitle>
                <CardEntities>
                  {slideItem.data.map((item) => (
                    <CardItem key={item.docId} item={item}>
                      <CardImage
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <CardMeta>
                        <CardSubTitle>{item.title}</CardSubTitle>
                        <CardText>{item.description}</CardText>
                      </CardMeta>
                    </CardItem>
                  ))}
                </CardEntities>
                <CardFeature category={category}>
                  <Player>
                    <PlayerButton />
                    <PlayerVideo src="/videos/video.mp4" />
                  </Player>
                </CardFeature>
              </Card>
            ))}
          </CardGroup>
        </>
      ) : (
        <>
          <SelectProfileContainer />
        </>
      )}
    </>
  );
};

export default BrowseContainer;
