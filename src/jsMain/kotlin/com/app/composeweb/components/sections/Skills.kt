package com.app.composeweb.components.sections

import androidx.compose.runtime.Composable
import com.app.composeweb.GrayColor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Li
import org.jetbrains.compose.web.dom.Span

@Composable
fun skillSet(Title: String, Description: String){
    Row(horizontalArrangement = Arrangement.Start,
    ){
        Li(
            attrs = Modifier.textAlign(TextAlign.Start)
                .paddingInline(0.px)
                .textAlign(TextAlign.Left)
                .toAttrs())
        Span(Modifier.textAlign(TextAlign.Start).toAttrs()) {
            SpanText("$Title: ",
                modifier = Modifier
                    .fontSize(15.px)
                    .id("ID")
                    .fontWeight(FontWeight.SemiBold))
            SpanText(Description,
                modifier = Modifier
                    .color(GrayColor)
            )
        }
    }
}
