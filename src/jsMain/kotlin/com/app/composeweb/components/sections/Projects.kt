package com.app.composeweb.components.sections

import androidx.compose.runtime.Composable
import com.app.composeweb.GrayColor
import com.varabyte.kobweb.compose.css.FlexBasis
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Height
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.*

@Composable
fun project(imageHeight: CSSNumeric = 196.px,
            imageWidth: CSSNumeric = 326.px,
            imgPath: String,
            title: String,
            Description: String){
    val br = rememberBreakpoint()
    Column(Modifier
        .padding(top = 40.px, bottom = 65.px)
    ){
        SpanText(title,
            modifier = Modifier
                .fontSize(20.px)
                .fontWeight(FontWeight.Bold)
                .padding(bottom = 20.px)

        )
        Row(Modifier

            .thenIf(br > Breakpoint.SM,//on Larger
            Modifier
                .display(DisplayStyle.Flex)
                .flexWrap(FlexWrap.Wrap)
            )
            .thenIf(br <= Breakpoint.SM ,//on Mobile
                Modifier
                    .display(DisplayStyle.Flex)
                    .flexWrap(FlexWrap.Wrap)
                    .flexDirection(FlexDirection.Column)
            )
        ) {
            Image(
                src = imgPath,
                "$title images",
                modifier = Modifier
                    .maxWidth(imageWidth)
                    .maxWidth(imageHeight)
                    .borderRadius(10.px)
                    .margin(right = 25.px,bottom = 30.px)

            )
            SpanText(
                Description,
                modifier = Modifier
                    .textAlign(TextAlign.Start)
                    .color(GrayColor)
                    .flexGrow(1).flexShrink(1)
                    .flexBasis(100.px)
                )
        }
    }
}