import React, { useEffect, useState } from "react";
import { fetchArtistsByGenre } from "../../SpotifyDB";
import CategorySection from "../CategorySection";
import SkeletonCategorySection from "../SkeletonCategorySection";

export default ({ token, setSelectArtist }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [artistsPop, setArtistsPop] = useState([]);
    const [artistsSertanejo, setArtistsSertanejo] = useState([]);
    const [artistsFunk, setArtistsFunk] = useState([]);
    const [artistsRock, setArtistsRock] = useState([]);
    const [artistsKPop, setArtistsKPop] = useState([]);
    const [artistsPagode, setArtistsPagode] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setArtistsPop(await fetchArtistsByGenre(token, 'pop', 'US'));
            setArtistsSertanejo(await fetchArtistsByGenre(token, 'sertanejo', 'BR'));
            setArtistsFunk(await fetchArtistsByGenre(token, 'funk', 'BR'));
            setArtistsRock(await fetchArtistsByGenre(token, 'rock', 'BR'));
            setArtistsKPop(await fetchArtistsByGenre(token, 'k-pop', ''));
            setArtistsPagode(await fetchArtistsByGenre(token, 'pagode', 'BR'));
            setIsLoading(false)
        };
        fetchData();
    }, [token]);

    return (
        <>
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top Pop Artists'} data={artistsPop} setSelectArtist={setSelectArtist} size={'lg'} />}
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top Sertanejo Artists'} data={artistsSertanejo} setSelectArtist={setSelectArtist} size={'lg'} />}
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top Funk Artists'} data={artistsFunk} setSelectArtist={setSelectArtist} size={'lg'} />}
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top Rock Artists'} data={artistsRock} setSelectArtist={setSelectArtist} size={'lg'} />}
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top K-Pop Artists'} data={artistsKPop} setSelectArtist={setSelectArtist} size={'lg'} />}
            {isLoading ? <SkeletonCategorySection size={'lg'} /> : <CategorySection title={'Top Pagode Artists'} data={artistsPagode} setSelectArtist={setSelectArtist} size={'lg'} />}
        </>
    );
};