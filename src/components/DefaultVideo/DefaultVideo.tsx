import React, {
    Fragment,
    useCallback,
    useContext,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

// ISSUE-853 https://github.com/gravity-ui/page-constructor/issues/853
// temporal solution for Safari 17
import {BlockPreloadVideoMetadataContext} from '../../context/blockPreloadVideoMetadataContext';
import {CustomControlsType, MediaVideoControlsType, MediaVideoProps} from '../../models';
import {block} from '../../utils';
import {getVideoTypesWithPriority} from '../Media/Video/utils';
import CustomBarControls from '../ReactPlayer/CustomBarControls';

import './DefaultVideo.scss';

const b = block('default-video');

type DefaultVideoRefType = HTMLVideoElement | undefined;

interface DefaultVideoProps {
    video: MediaVideoProps;
    qa?: string;
    customBarControlsClassName?: string;
    className?: string;
    // ISSUE-853 https://github.com/gravity-ui/page-constructor/issues/853
    // temporal solution for Safari 17
    shouldPreload?: boolean;
}

export const DefaultVideo = React.forwardRef<DefaultVideoRefType, DefaultVideoProps>(
    (props, ref) => {
        const {video, qa, customBarControlsClassName, shouldPreload = true} = props;
        const {controls, customControlsOptions, muted: initiallyMuted = true} = video;
        const {
            muteButtonShown,
            positioning,
            type: customControlsType,
        } = customControlsOptions || {};
        const [isPaused, setIsPaused] = useState(false);
        const [isMuted, setIsMuted] = useState(initiallyMuted);
        const videoRef = useRef<HTMLVideoElement>(null);
        // ISSUE-853 https://github.com/gravity-ui/page-constructor/issues/853
        // temporal solution for Safari 17
        const blockPreloadVideoMetadata = useContext(BlockPreloadVideoMetadataContext);

        // one may not use this hook and work with `ref` variable only, but
        // in this case one should support both function type and object type,
        // according to ForwardedRef type.
        // Currently used way with extra ref and useImperativeHandle is more
        // convenient and allows us to work with object typed ref only,
        // avoiding typeof ref === 'function' statements
        useImperativeHandle(
            ref,
            () => {
                if (!videoRef?.current) {
                    return undefined;
                }

                return videoRef.current;
            },
            [videoRef],
        );
        const onPlayToggle = useCallback(() => {
            setIsPaused((value) => {
                if (value) {
                    videoRef?.current?.play();
                } else {
                    videoRef?.current?.pause();
                }

                return !value;
            });
        }, [videoRef]);
        const onMuteToggle = useCallback(() => {
            setIsMuted((value) => !value);
        }, []);

        const onClick = useCallback(() => {
            if (customControlsType === CustomControlsType.WithPlayPauseButton) {
                onPlayToggle();
            }
        }, [onPlayToggle, customControlsType]);

        // ISSUE-853 https://github.com/gravity-ui/page-constructor/issues/853
        // temporal solution for Safari 17
        // eslint-disable-next-line no-nested-ternary
        const preload = blockPreloadVideoMetadata
            ? shouldPreload
                ? 'metadata'
                : undefined
            : 'metadata';

        return (
            <Fragment>
                <video
                    disablePictureInPicture
                    playsInline
                    // @ts-ignore
                    // eslint-disable-next-line react/no-unknown-property
                    pip="false"
                    className={b()}
                    ref={videoRef}
                    // ISSUE-853 https://github.com/gravity-ui/page-constructor/issues/853
                    // temporal solution for Safari 17
                    preload={preload}
                    muted={isMuted}
                    aria-label={video.ariaLabel}
                    onClick={onClick}
                >
                    {getVideoTypesWithPriority(video.src).map(({src, type}, index) => (
                        <source key={index} src={src} type={type} data-qa={qa} />
                    ))}
                </video>

                {controls === MediaVideoControlsType.Custom && (
                    <CustomBarControls
                        className={customBarControlsClassName}
                        type={customControlsType}
                        isPaused={isPaused}
                        onPlayClick={onPlayToggle}
                        muteButtonShown={muteButtonShown}
                        shown
                        positioning={positioning}
                        mute={{
                            isMuted: Boolean(isMuted),
                            changeMute: onMuteToggle,
                        }}
                    />
                )}
            </Fragment>
        );
    },
);

DefaultVideo.displayName = 'DefaultVideo';
