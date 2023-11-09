var Webflow=Webflow||[];Webflow.push(function(){function o(o){var e=$(".concentration, .concentration option"),t=$(".coloured-tablets-concentration, .coloured-tablets-concentration option"),a=$(".chicken-flavoured-tablets-concentration, .chicken-flavoured-tablets-concentration option"),i=$(".oil-flavour, .oil-flavour option"),l=$(".aqueous-liquid-flavour, .aqueous-liquid-flavour option"),r=$(".treats-flavour, .treats-flavour option, .treats-concentration, .treats-concentration option"),n=$(".tablets-concentration, .tablets-concentration option"),s=$(".injections-concentration, .injections-concentration option"),c=$(".ointment-concentration, .ointment-concentration option"),p=$(".topical-cream-concentration, .topical-cream-concentration option"),d=$(".otic-suspension-concentration, .otic-suspension-concentration option"),u=$(".opthalmic-drops-concentration, .opthalmic-drops-concentration option"),m=$(".opthalmic-ointment-concentration, .opthalmic-ointment-concentration option"),h=$(".transdermal-gel-1-concentration, .transdermal-gel-1-concentration option"),q=$(".transdermal-gel-60-concentration, .transdermal-gel-60-concentration option"),b=$(".opthalmic-aqueous-drops-pack-size, .opthalmic-aqueous-drops-concentration, .opthalmic-aqueous-drops-pack-size option, .opthalmic-aqueous-drops-concentration option"),f=$(".topical-ointment-concentration, .topical-ointment-concentration option"),v=$(".rectal-gel-concentration, .rectal-gel-concentration option"),g=$(".paste-concentration, .paste-concentration option"),w=$(".oral-powder-concentration, .oral-powder-concentration option"),_=$(".pharmacy-supplies-concentration, .pharmacy-supplies-concentration option"),y=$(".concentration, .oil-flavour, .oil-concentration, .treats-flavour, .treats-concentration, .tablets-concentration,  .injections-concentration,  .liquidrecons-concentration,  .ointment-concentration,  .otic-suspension-concentration, .opthalmic-drops-concentration,  .opthalmic-ointment-concentration,  .aqueous-liquid-concentration,  .transdermal-gel-1-concentration,  .transdermal-gel-60-concentration, .opthalmic-aqueous-drops-concentration, .topical-ointment-concentration, .rectal-gel-concentration,  .paste-concentration, .topical-cream-concentration, .coloured-tablets-concentration, .chicken-flavoured-tablets-concentration, .aqueous-liquid-flavour-concentration, .oral-powder-concentration, .pharmacy-supplies-concentration");$(".oil-flavour, .oil, .treats, .treats-flavour, .tablets, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .transdermal-gel-1, .opthalmic-aqueous-drops, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),a.prop("disabled",!0),t.prop("disabled",!0),e.prop("disabled",!1),i.prop("disabled",!0),r.prop("disabled",!0),n.prop("disabled",!0),s.prop("disabled",!0),c.prop("disabled",!0),d.prop("disabled",!0),u.prop("disabled",!0),m.prop("disabled",!0),h.prop("disabled",!0),q.prop("disabled",!0),b.prop("disabled",!0),f.prop("disabled",!0),v.prop("disabled",!0),g.prop("disabled",!0),p.prop("disabled",!0),l.prop("disabled",!0),w.prop("disabled",!0),_.prop("disabled",!0),y.prop("required",!1),"Capsules"===o?($(".capsules").show(),$(".treats-flavour, .oil-flavour, .treats, .tablets, .oil, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),e.prop("required",!0).prop("disabled",!1)):o.includes("Soft Chews")?($(".treats-flavour").show(),$(".treats").show(),$(".tablets, .oil, .capsules, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),r.prop("required",!0).prop("disabled",!1)):"Tablets"===o?($(".tablets").show(),$(".treats-flavour,  .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),n.prop("required",!0).prop("disabled",!1)):o.includes("Injections")?($(".injections").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),s.prop("required",!0).prop("disabled",!1)):"Ointment"===o?($(".ointment").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),c.prop("required",!0).prop("disabled",!1)):"Ophthalmic Oil Drops"===o?($(".opthalmic-drops").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),u.prop("required",!0).prop("disabled",!1)):"Ophthalmic Ointment"===o?($(".opthalmic-ointment").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),m.prop("required",!0).prop("disabled",!1)):"Transdermal Gel (1ml Syringe)"===o?($(".transdermal-gel-1").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),h.prop("required",!0).prop("disabled",!1)):"Transdermal Gel (60 Dose Pen Applicator)"===o?($(".transdermal-gel-60").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-1, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),q.prop("required",!0).prop("disabled",!1)):"Ophthalmic Aqueous Drops"===o?($(".opthalmic-aqueous-drops").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .topical-ointment, .rectal-gel, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),b.prop("required",!0).prop("disabled",!1)):"Topical Ointment"===o?($(".topical-ointment").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .rectal-gel, .paste, .transdermal-gel-60 .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),f.prop("required",!0).prop("disabled",!1)):"Rectal Gel"===o?($(".rectal-gel").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .paste, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),v.prop("required",!0).prop("disabled",!1)):"Paste"===o?($(".paste").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .topical-cream, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),g.prop("required",!0).prop("disabled",!1)):"Topical Cream"===o?($(".topical-cream").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .coloured-tablets, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),p.prop("required",!0).prop("disabled",!1)):"Coloured Tablets"===o?($(".coloured-tablets").show(),$(".treats-flavour, .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .chicken-flavoured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),t.prop("required",!0).prop("disabled",!1)):"Chicken Flavoured Tablets"===o?($(".chicken-flavoured-tablets").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .coloured-tablets, .aqueous-liquid-flavour, .oral-powder, .pharmacy-supplies").hide(),a.prop("required",!0).prop("disabled",!1)):"Oral Powder"===o?($(".oral-powder").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .coloured-tablets, .aqueous-liquid-flavour, .pharmacy-supplies").hide(),w.prop("required",!0).prop("disabled",!1)):"Pharmacy Supplies"===o&&($(".pharmacy-supplies").show(),$(".treats-flavour,  .tablets, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment,  .transdermal-gel-1, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .transdermal-gel-60, .coloured-tablets, .aqueous-liquid-flavour, .oral-powder").hide(),_.prop("required",!0).prop("disabled",!1))}var e=$(".dosage-form").val();$(document).ready(function(){o(e)}),$(".dosage-form").on("change",function(){o($(this).val()),initDynamicPrice()})});