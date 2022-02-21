import {BlockType} from './models';
import {
    Section,
    Text,
    Container,
    Header,
    HeaderBreadcrumbs,
    HeaderWithImage,
    Button,
    Title,
    Divider,
    Features,
    Tabs,
    Share,
    Link,
    Table,
    ImageBlock,
    Scrollable,
    Tiles,
    Partner,
    PriceDetailed,
    MediaCard,
    NewsCard,
    TutorialCard,
    CardWithImage,
    BackgroundCard,
} from './components';

import {
    BannerBlock,
    CompaniesBlock,
    SimpleBlock,
    MediaBlock,
    PreviewBlock,
    InfoBlock,
    SecurityBlock,
    SliderBlock,
    ExtendedFeaturesBlock,
    PromoFeaturesBlock,
    QuestionsBlock,
    TableBlock,
    TabsBlock,
    TextTableBlock,
    LinkTableBlock,
    CardsWithImageBlock,
    HeaderBlock,
    IconsBlock,
    HeaderSliderBlock,
    CardLayoutBlock,
} from './blocks';

const components = {
    [BlockType.Section]: Section,
    [BlockType.Text]: Text,
    [BlockType.Container]: Container,
    [BlockType.Header]: Header,
    [BlockType.HeaderBreadcrumbs]: HeaderBreadcrumbs,
    [BlockType.HeaderWithImage]: HeaderWithImage,
    [BlockType.Button]: Button,
    [BlockType.Title]: Title,
    [BlockType.Divider]: Divider,
    [BlockType.Features]: Features,
    [BlockType.Tabs]: Tabs,
    [BlockType.Share]: Share,
    [BlockType.Link]: Link,
    [BlockType.Table]: Table,
    [BlockType.Image]: ImageBlock,
    [BlockType.Scrollable]: Scrollable,
    [BlockType.Tiles]: Tiles,
    [BlockType.TutorialCard]: TutorialCard,
    [BlockType.Partner]: Partner,
    [BlockType.PriceDetailed]: PriceDetailed,
    [BlockType.MediaCard]: MediaCard,
    [BlockType.BannerCard]: BannerBlock,
    [BlockType.NewsCard]: NewsCard,
    [BlockType.CardWithImage]: CardWithImage,
    [BlockType.BackgroundCard]: BackgroundCard,

    // Blocks
    [BlockType.SliderBlock]: SliderBlock,
    [BlockType.SimpleBlock]: SimpleBlock,
    [BlockType.ExtendedFeaturesBlock]: ExtendedFeaturesBlock,
    [BlockType.PromoFeaturesBlock]: PromoFeaturesBlock,
    [BlockType.QuestionsBlock]: QuestionsBlock,
    [BlockType.BannerBlock]: BannerBlock,
    [BlockType.CompaniesBlock]: CompaniesBlock,
    [BlockType.MediaBlock]: MediaBlock,
    [BlockType.PreviewBlock]: PreviewBlock,
    [BlockType.InfoBlock]: InfoBlock,
    [BlockType.SecurityBlock]: SecurityBlock,
    [BlockType.TableBlock]: TableBlock,
    [BlockType.TabsBlock]: TabsBlock,
    [BlockType.TextTableBlock]: TextTableBlock,
    [BlockType.LinkTableBlock]: LinkTableBlock,
    [BlockType.CardsWithImageBlock]: CardsWithImageBlock,
    [BlockType.HeaderBlock]: HeaderBlock,
    [BlockType.IconsBlock]: IconsBlock,
    [BlockType.HeaderSliderBlock]: HeaderSliderBlock,
    [BlockType.CardLayoutBlock]: CardLayoutBlock,
};

export default components;
